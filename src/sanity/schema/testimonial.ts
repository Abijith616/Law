import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Client Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Testimonial Quote",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Name & Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "matter",
      title: "Matter / Service Area Reference",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
