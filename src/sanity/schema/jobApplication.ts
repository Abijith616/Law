import { defineType, defineField } from "sanity";

export const jobApplication = defineType({
  name: "jobApplication",
  title: "Job Applications",
  type: "document",
  // Allow viewing and deleting applications from the Studio, but fields are read-only to avoid edits
  fields: [
    defineField({
      name: "name",
      title: "Candidate Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "role",
      title: "Role Applied For",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "Cover Note",
      type: "text",
      readOnly: true,
    }),
    defineField({
      name: "resume",
      title: "Resume / CV File",
      type: "file",
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Submission Date, Newest",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
});
