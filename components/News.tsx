import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { hr } from "date-fns/locale";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Article } from "@/lib/types";

interface NewsSectionProps {
    articles: Article[];
    category: string;
}

export default function News({ articles, category }: NewsSectionProps) {
    const filteredArticles = articles.filter((article) => article.category === category);

    return (
        <section className="py-8 px-8 rounded-md">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-black ml-1 mb-8 underline underline-offset-8 decoration-[#fbb03b]">
                    {category === "novosti" ? "Novosti" : "U zajednici"}
                </h2>

                <div className="flex flex-col gap-6">
                    {filteredArticles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-row items-start gap-4">
                        <Link href={`/${category}/${article.slug}`} key={article.id} className="flex flex-row w-full">
                            {/* Image Section */}
                            <div className="relative w-[30%] h-auto aspect-video">
                                <Image
                                    src={article.images[0] || "/placeholder.svg"}
                                    alt={article.title}
                                    fill
                                    className="object-cover rounded-md"/>
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col justify-between w-[70%]">
                                <CardHeader>
                                    <h3 className="font-semibold text-xl line-clamp-2 hover:text-blue-600 transition-colors leading-snug mt-2">
                                        {article.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="mb-2">
                                    <p className="text-md text-gray-800 line-clamp-3">{article.excerpt}</p>
                                </CardContent>
                                <CardFooter>
                                    <time className="text-sm text-gray-400">
                                        {format(new Date(article.date), "d. MMMM yyyy.", { locale: hr })}
                                    </time>
                                </CardFooter>
                            </div>
                        </Link>
                    </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}