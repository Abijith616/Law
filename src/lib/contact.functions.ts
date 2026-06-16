import { createServerFn } from "@tanstack/react-start";

export const submitInquiry = createServerFn({ method: "POST" })
  .validator(
    (input: { name: string; phone: string; email?: string; matter: string; message: string }) =>
      input,
  )
  .handler(async ({ data }) => {
    if (!data.name || !data.phone || !data.message) {
      throw new Error("Please fill in name, phone and message.");
    }
    console.log("[contact-inquiry]", {
      at: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      email: data.email,
      matter: data.matter,
      preview: data.message.slice(0, 200),
    });
    return { ok: true as const };
  });
