import { defineType, defineField } from "sanity";

export const advocate = defineType({
  name: "advocate",
  title: "Advocates / Partners",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: "Initials used in round avatar badges (e.g. JJ, AA).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Position",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "years",
      title: "Years of Experience",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "phoneHref",
      title: "Phone Dial Link",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Short Biography",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
