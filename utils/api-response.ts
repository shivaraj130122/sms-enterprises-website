import { NextResponse } from "next/server";

interface SuccessPayload<T> {
  success: true;
  message?: string;
  data?: T;
}

interface ErrorPayload {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

/**
 * 200 OK response with an optional data payload.
 */
export function success<T>(
  data?: T,
  message = "Request successful",
  status = 200
): NextResponse<SuccessPayload<T>> {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status }
  );
}

/**
 * Generic error response. Defaults to 400 Bad Request.
 */
export function error(
  message = "Something went wrong",
  status = 400
): NextResponse<ErrorPayload> {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status }
  );
}

/**
 * 422 Unprocessable Entity — used for Zod / schema validation failures.
 * Accepts a field-to-message map produced by validateEnquiry().
 */
export function validationError(
  errors: Record<string, string>,
  message = "Validation failed"
): NextResponse<ErrorPayload> {
  return NextResponse.json(
    {
      success: false,
      message,
      errors,
    },
    { status: 422 }
  );
}

/**
 * 500 Internal Server Error — used for unexpected server / database failures.
 * Logs the original error server-side without leaking internals to the client.
 */
export function serverError(
  err: unknown,
  message = "Internal server error"
): NextResponse<ErrorPayload> {
  // eslint-disable-next-line no-console
  console.error("[SERVER ERROR]", err);

  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 500 }
  );
}

/**
 * 429 Too Many Requests — used by the rate limiter.
 */
export function rateLimitError(
  message = "Too many requests. Please try again later."
): NextResponse<ErrorPayload> {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 429 }
  );
}

/**
 * 404 Not Found.
 */
export function notFoundError(
  message = "Resource not found"
): NextResponse<ErrorPayload> {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 404 }
  );
}

export const ApiResponse = {
  success,
  error,
  validationError,
  serverError,
  rateLimitError,
  notFoundError,
};

export default ApiResponse;
