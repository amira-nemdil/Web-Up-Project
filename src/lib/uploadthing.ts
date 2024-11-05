import { generateUploadButton, generateUploadDropzone, generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from '@/app/api/uploadthing/core'; // Ensure this path is correct

// Generate the UploadButton and UploadDropzone components
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// Generate React helpers for custom components
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
