import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { firm, insights as fallbackInsights } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";
import { client } from "@/lib/sanity";

export const Route = createFileRoute("/insights/$slug")({
  loader: async ({ params }) => {
    try {
      const sanityArticle = await client.fetch(
        `*[_type == "article" && slug.current == $slug][0]`,
        { slug: params.slug },
      );
      if (sanityArticle) {
        return {
          article: {
            slug: sanityArticle.slug.current,
            date: sanityArticle.date,
            author: sanityArticle.author,
            title: sanityArticle.title,
            excerpt: sanityArticle.excerpt,
            body: sanityArticle.body,
          },
        };
      }
    } catch (e) {
      console.warn("Failed to fetch article from Sanity, using fallback:", e);
    }

    const article = fallbackInsights.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title.en} — ${firm.name}` : firm.name;
    const desc = a?.excerpt.en ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl text-primary">Article not found</h1>
      <Link
        to="/insights"
        className="mt-6 inline-block text-sm uppercase tracking-[0.18em] text-gold"
      >
        ← All insights
      </Link>
    </div>
  ),
  component: InsightDetail,
});

function InsightDetail() {
  const t = useT();
  const { article } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        to="/insights"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> {t(ui.nav.insights)}
      </Link>
      <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {new Date(article.date).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}{" "}
        · {article.author}
      </p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl">
        {t(article.title)}
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">{t(article.excerpt)}</p>
      <div className="mt-10 border-t border-gold pt-8 text-lg leading-relaxed text-foreground">
        {t(article.body)}
      </div>
      <div className="mt-12 border border-border bg-card p-6 text-sm text-muted-foreground">
        This note is published for general information only. It does not constitute legal advice.
        For specific guidance,{" "}
        <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
          contact our office
        </Link>
        .
      </div>
    </article>
  );
}
