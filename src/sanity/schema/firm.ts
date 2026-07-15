import { defineType, defineField } from "sanity";

export const firm = defineType({
  name: "firm",
  title: "Firm Info",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortName",
      title: "Short Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "localeString",
    }),
    defineField({
      name: "established",
      title: "Established Year",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City / Location",
      type: "localeString",
    }),
    defineField({
      name: "leadAdvocate",
      title: "Lead Advocate/Partner Info",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() },
        { name: "barCouncilNo", title: "Bar Council / FRN No.", type: "string" },
        { name: "aibe", title: "AIBE / Membership No.", type: "string" },
        { name: "yearsOfPractice", title: "Years of Practice", type: "number" },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "phone", title: "Display Phone", type: "string", validation: (Rule) => Rule.required() },
        { name: "phoneHref", title: "Phone Dial Link (no spaces)", type: "string" },
        { name: "whatsapp", title: "WhatsApp Number (with country code, no +)", type: "string" },
        { name: "email", title: "Email Address", type: "string" },
        { name: "address", title: "Office Address", type: "localeText" },
        { name: "hours", title: "Working Hours", type: "localeString" },
      ],
    }),
    defineField({
      name: "courts",
      title: "Areas of Expertise (List of tags)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mapEmbed",
      title: "Google Map Embed URL",
      type: "string",
    }),
    defineField({
      name: "consultation",
      title: "Consultation Offer Text",
      type: "localeString",
    }),
  ],
});
