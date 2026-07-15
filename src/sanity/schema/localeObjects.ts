import { defineType } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Bilingual String",
  type: "object",
  fields: [
    {
      name: "en",
      title: "English",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ml",
      title: "Malayalam",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
});

export const localeText = defineType({
  name: "localeText",
  title: "Bilingual Text",
  type: "object",
  fields: [
    {
      name: "en",
      title: "English",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ml",
      title: "Malayalam",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
  ],
});
