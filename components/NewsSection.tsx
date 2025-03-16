import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { hr } from "date-fns/locale"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Article } from "@/lib/types"

interface NewsSectionProps {
  articles: Article[]
}

export default function NewsSection({ articles }: NewsSectionProps) {
  const displayedArticles = articles.slice(0, 4) // Ensure max 4 articles
  const gridColumns =
    displayedArticles.length >= 4
      ? "lg:grid-cols-4"
      : displayedArticles.length >= 3
        ? "lg:grid-cols-3"
        : displayedArticles.length >= 2
          ? "lg:grid-cols-2"
          : "lg:grid-cols-1"

  return (
    <section className="py-8 px-8 bg-[#fddfb0] rounded-md w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black ml-1 mb-8">Novosti</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridColumns} gap-6`}>
          {displayedArticles.map((article) => {
            const categoryPath = article.category === "zajednica" ? "zajednica" : "novosti"

            return (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col h-full"
              >
                <Link href={`/${categoryPath}/${article.slug}`} className="flex flex-col h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={article.images?.[0] || "/placeholder.svg?height=200&width=400"}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover px-4"
                    />
                  </div>
                  <div className="flex flex-col h-full">
                    <CardHeader className="pb-0 mt-2">
                      <h3 className="font-semibold text-lg line-clamp-2 hover:text-blue-600 transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </CardHeader>
                    <div className="flex flex-col h-full">
                      <CardContent className="mb-2">
                        <p className="text-sm text-gray-800 line-clamp-3 ">{article.excerpt}</p>
                      </CardContent>
                    </div>
                    <CardFooter className="mt-auto pt-0 pb-4">
                      <time className="text-sm text-gray-500">
                        {format(new Date(article.date), "d. MMMM yyyy.", { locale: hr })}
                      </time>
                    </CardFooter>
                  </div>
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}