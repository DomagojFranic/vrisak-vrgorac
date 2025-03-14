'use client'

import { notFound } from "next/navigation"
import Image from "next/image"
import { format } from "date-fns"
import { hr } from "date-fns/locale"
import NavigationBar from "@/components/NavBar"
import articles from "@/data/articles.json"
import Footer from "@/components/Footer"
import { ImageGallery } from "@/components/ImageGallery"
import { generateStaticParams } from "./params"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
    
  const article = articles.articles.find((article) => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen flex flex-col">
  <NavigationBar />

  <article className="flex-1">
    {/* Image Gallery - Centered, Responsive & Larger */}
    <div className="w-full max-w-5xl mx-auto mt-10 px-4">
      <ImageGallery 
        images={article.images || [article.images[0]]} 
        alt={article.title}/>
    </div>

    {/* Article Content */}
    <div className="max-w-4xl mx-auto mb-10 px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">{article.title}</h1>
        <time className="text-gray-500">{format(new Date(article.date), "d. MMMM yyyy.", { locale: hr })}</time>
      </header>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-black leading-relaxed">{article.content}</p>
      </div>
    </div>
  </article>

  <Footer />
</main>

  )
}