import { createServerFn } from "@tanstack/react-start";
import { getWriteClient } from "./sanity";

export const submitJobApplication = createServerFn({ method: "POST" })
  .validator(
    (input: {
      name: string;
      phone: string;
      role: string;
      message: string;
      resumeFileName: string;
      resumeBase64: string;
    }) => input,
  )
  .handler(async ({ data }) => {
    if (!data.name || !data.phone || !data.role || !data.message || !data.resumeBase64) {
      throw new Error("All fields and resume file are required.");
    }

    try {
      const writeClient = getWriteClient();

      // 1. Decode the Base64 file string
      // Format: "data:application/pdf;base64,JVBER..." or just raw base64 string
      const base64Data = data.resumeBase64.includes(";base64,")
        ? data.resumeBase64.split(";base64,")[1]
        : data.resumeBase64;
      const fileBuffer = Buffer.from(base64Data, "base64");

      // 2. Upload file to Sanity Assets
      console.log(`[careers] Uploading resume: ${data.resumeFileName}...`);
      const asset = await writeClient.assets.upload("file", fileBuffer, {
        filename: data.resumeFileName,
      });
      console.log(`[careers] Resume uploaded successfully with asset ID: ${asset._id}`);

      // 3. Create the Job Application document
      const applicationDoc = {
        _type: "jobApplication",
        name: data.name,
        phone: data.phone,
        role: data.role,
        message: data.message,
        resume: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        },
        submittedAt: new Date().toISOString(),
      };

      const result = await writeClient.create(applicationDoc);
      console.log(`[careers] Application created for candidate ${data.name} (ID: ${result._id})`);

      return { ok: true as const, id: result._id };
    } catch (err: any) {
      console.error("[careers] Failed to submit application:", err);
      throw new Error(err?.message || "Failed to submit application to CMS.");
    }
  });
