import NavigationBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import News from "@/components/News";
import articles from "@/data/articles.json";

export default function Novosti() {
    return (
        <main className="min-h-screen flex flex-col">
            <NavigationBar />

            <div className="flex-1 max-w-full mx-auto p-8 rounded-lg">
                <News articles={articles.articles} />
            </div>

            <Footer />
        </main>
    );
}
