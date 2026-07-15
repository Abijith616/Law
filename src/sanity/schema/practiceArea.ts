import { defineType, defineField } from "sanity";

export const practiceArea = defineType({
  name: "practiceArea",
  title: "Services / Practice Areas",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title.en",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Identifier for the icon (e.g., 'audit-assurance', 'tax-litigation', 'gst-compliance').",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "short",
      title: "Short Description",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Full Body Text",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
