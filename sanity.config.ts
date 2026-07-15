import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "default",
  title: "J A & Associates CMS",

  projectId: "ftmt2eqp",
  dataset: "production",
  basePath: "/studio", // Match the route we will define in the website

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content Manager")
          .items([
            // Singleton for general firm details
            S.listItem()
              .title("Firm Settings")
              .id("firm")
              .child(S.document().schemaType("firm").documentId("firm")),
            S.divider(),
            // Other documents, excluding "firm" singleton
            ...S.documentTypeListItems().filter(
              (item) => !["firm"].includes(item.getId() ?? ""),
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
