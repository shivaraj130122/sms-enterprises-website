export type EnquiryStatus = "new" | "contacted" | "closed";

export interface IEnquiry {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: EnquiryStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface EnquiryInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface EnquiryResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
}
