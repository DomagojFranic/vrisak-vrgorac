import NavigationBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import News from "@/components/News";
import articles from "@/data/articles.json";

export default function Zajednica() {
    return (
        <main className="min-h-screen flex flex-col">
            <NavigationBar />

            <div className="flex-1 max-w-full mx-auto p-2 rounded-lg p-4 sm:p-6 md:p-8">
                <News articles={articles.articles} category="zajednica"/>
            </div>

            <Footer />
        </main>
    );
}