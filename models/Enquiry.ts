import mongoose, { Schema, Model, Document } from "mongoose";
import type { EnquiryStatus } from "@/types/enquiry";

export interface EnquiryDocument extends Document {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: EnquiryStatus;
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema = new Schema<EnquiryDocument>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name must be at most 100 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: [20, "Phone number must be at most 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxlength: [254, "Email must be at most 254 characters"],
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
      maxlength: [150, "Service must be at most 150 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters"],
      maxlength: [2000, "Message must be at most 2000 characters"],
    },
    status: {
      type: String,
      enum: {
        values: ["new", "contacted", "closed"],
        message: "Status must be one of: new, contacted, closed",
      },
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

EnquirySchema.index({ createdAt: -1 });
EnquirySchema.index({ status: 1 });
EnquirySchema.index({ email: 1 });

const Enquiry: Model<EnquiryDocument> =
  (mongoose.models.Enquiry as Model<EnquiryDocument>) ||
  mongoose.model<EnquiryDocument>("Enquiry", EnquirySchema);

export default Enquiry;
