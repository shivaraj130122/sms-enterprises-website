/**
 * Simple in-memory rate limiter.
 *
 * NOTE: This is process-local storage. It is fine for a single-instance
 * deployment or development, but will NOT work correctly across multiple
 * serverless instances / edge regions. When scaling horizontally, replace
 * this with a shared store such as Redis (e.g. Upstash) or a database-backed
 * counter. The interface below is intentionally kept simple so the swap
 * later is a drop-in replacement.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface RateLimitOptions {
  /** Maximum number of requests allowed within the window. */
  limit: number;
  /** Length of the sliding window, in milliseconds. */
  windowMs: number;
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

const DEFAULT_OPTIONS: RateLimitOptions = {
  limit: 5,
  windowMs: 60_000, // 1 minute
};

/**
 * Periodically clears expired entries so the Map doesn't grow unbounded
 * for long-running processes.
 */
function cleanupExpiredEntries(now: number): void {
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }
}

let lastCleanup = Date.now();
const CLEANUP_INTERVAL_MS = 5 * 60_000; // 5 minutes

/**
 * Checks and records a request against the rate limit for a given key
 * (typically an IP address or a combination of IP + route).
 */
export function rateLimit(
  identifier: string,
  options: Partial<RateLimitOptions> = {}
): RateLimitResult {
  const { limit, windowMs } = { ...DEFAULT_OPTIONS, ...options };
  const now = Date.now();

  if (now - lastCleanup > CLEANUP_INTERVAL_MS) {
    cleanupExpiredEntries(now);
    lastCleanup = now;
  }

  const existing = store.get(identifier);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + windowMs;
    store.set(identifier, { count: 1, resetAt });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      resetAt,
    };
  }

  if (existing.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      resetAt: existing.resetAt,
    };
  }

  existing.count += 1;
  store.set(identifier, existing);

  return {
    success: true,
    limit,
    remaining: limit - existing.count,
    resetAt: existing.resetAt,
  };
}

/**
 * Extracts a best-effort client identifier from a Next.js Request object.
 * Falls back to "unknown" if no address can be determined.
 */
export function getClientIdentifier(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}
