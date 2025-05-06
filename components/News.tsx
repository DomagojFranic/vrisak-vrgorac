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
        <section className="py-8 px-2 sm:px-8 rounded-md w-full">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-black ml-1 mb-8 underline underline-offset-8 decoration-[#fbb03b]">
                    {category === "novosti" ? "Novosti" : "U zajednici"}
                </h2>
                
                {category === "zajednica" && (
                    <div className="prose max-w-none mb-10">
                        <p className="text-lg text-black leading-relaxed">
                        Pčelarska udruga „Vrisak“ razumije važnost suradnje s lokalnom zajednicom. Kroz naše aktivnosti, nastojimo imati pozitivan utjecaj na društvo i okoliš. Kroz edukaciju i promociju, želimo podići svijest o važnosti pčela za ekosustav i zdravlje ljudi, te omogućiti lokalnim pčelarima da unaprijede svoje poslovanje.
                        <br/>Također, potičemo potrošnju lokalnih pčelinjih proizvoda, čime doprinosimo očuvanju i razvoju lokalne ekonomije, ali i zdravlja populacije.
                        <br/>Udruga se također bavi organiziranjem volonterskih aktivnosti, kao što su čišćenje okoliša, sadnja biljaka koje podržavaju oprašivače i sudjelovanje u lokalnim manifestacijama, čime doprinosimo očuvanju tradicije i održivom razvoju naše zajednice.
                        </p>
                    </div>
                )}

                <div className="flex flex-col gap-6 px-2 sm:px-4 md:px-8">
                    {filteredArticles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-row items-start gap-4">
                        <Link href={`/${category}/${article.slug}`} key={article.id} className="flex flex-row w-full">
                            {/* Image Section */}
                            <div className="relative w-[30%] h-auto aspect-video ml-2">
                                <Image
                                    src={article.images[0] || "/placeholder.svg"}
                                    alt={article.title}
                                    fill
                                    className="object-cover rounded-sm"/>
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