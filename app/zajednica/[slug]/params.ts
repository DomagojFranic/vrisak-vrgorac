import articles from "@/data/articles.json";

export function generateStaticParams() {
    return articles.articles.map((article) => ({
        slug: article.slug,
    }));
}