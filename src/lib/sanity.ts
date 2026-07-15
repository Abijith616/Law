import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import process from "node:process";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "ftmt2eqp";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

// Read-only client for fetching public content
export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-01",
  useCdn: true, // true to cache queries in edge CDNs
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

// Secure write client for server-side tasks (e.g. uploading resumes, writing entries)
export function getWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    throw new Error("Missing SANITY_API_WRITE_TOKEN server environment variable.");
  }
  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-03-01",
    useCdn: false,
    token,
  });
}
