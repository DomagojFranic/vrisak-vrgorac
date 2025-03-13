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
  return (
    <section className="py-8 px-8 bg-[#fddfb0] rounded-md">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black ml-1 mb-8">Novosti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/novosti/${article.slug}`}>
                <div className="aspect-video relative">
                  <Image
                    src={article.imageUrl || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"/>
                </div>
                <CardHeader>
                  <h3 className="font-semibold text-lg line-clamp-2 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>
                <CardContent className="mb-2">
                  <p className="text-sm text-gray-800 line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <time className="text-sm text-gray-400">
                    {format(new Date(article.date), "d. MMMM yyyy.", { locale: hr })}
                  </time>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}