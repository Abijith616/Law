import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Blog Insights",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
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
      name: "date",
      title: "Publish Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
