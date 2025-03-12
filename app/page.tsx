import Image from "next/image"
import Link from "next/link"
import { PlusCircle, Mail } from "lucide-react"
import NavigationBar from "@/components/NavBar"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <section className="bg-gray-300 py-16 px-6 flex-1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
            Pčelarska udruga
            <br />
            "Vrisak" Vrgorac
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="flex items-center gap-2">
              <Link href="/dodaj-clanak">
                <PlusCircle className="h-5 w-5" />
                Dodaj novi članak
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="/kontakt">
                <Mail className="h-5 w-5" />
                Kontaktirajte nas
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <Logo/>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-300 mb-6">O nama</h2>
            <p className="text-slate-600 mb-4">Mi smo pčelarska udruga iz grada Vrgorca.</p>
            <p className="text-slate-600">U ovom dijelu možete saznati više o nama.</p>
          </div>
        </div>
      </section>
    </main>
  )
}