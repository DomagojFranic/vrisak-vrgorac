import NavigationBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function CiljeviAktivnosti() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <div className="flex-1 flex-col max-w-5xl mx-auto px-6 py-8">
        <article className="flex flex-col gap-6">
            <div className="flex justify-center my-4">
                <Image
                    src="/ciljeviAktivnost.jpg"
                    alt="Ciljevi i aktivnosti"
                    width={800}
                    height={400}
                    className="relative w-full aspect-[16/9] rounded-lg shadow-md overflow-hidden"
                    // className="w-full max-h-[500px] rounded-lg shadow-md object-cover"
                    priority/>
            </div>
            <header className="text-start">
                <h1 className="text-2xl md:text-3xl font-bold text-black">Ciljevi i aktivnosti</h1>
            </header>

            <div className="prose max-w-none">
                <p className="text-lg text-black leading-relaxed">
                Pčelarska udruga Vrisak ima nekoliko ključnih ciljeva i aktivnosti koji vode naš rad:
                </p>

                <ol className="list-decimal pl-6 text-lg text-black leading-relaxed">
                    <li>
                        <strong>Edukacija i razvoj vještina</strong> - Kroz organizirane radionice, predavanja i praktične seminare, nastojimo educirati naše članove i širu zajednicu o svim aspektima pčelarstva, uključujući zdravlje pčela, upravljanje pčelinjim zajednicama, te proizvodnju i marketing pčelinjih proizvoda.
                    </li>
                    <li>
                        <strong>Suradnja i zajedništvo</strong> - Podržavamo razmjenu iskustava među članovima udruge, potičući zajedništvo u rješavanju problema i izazova. Kroz razmjenu znanja i ideja želimo unaprijediti pčelarske prakse i podići kvalitetu proizvoda.
                    </li>
                    <li>
                        <strong>Podrška pčelarima</strong> - Naša udruga pomaže svojim članovima u svim fazama pčelarenja, od početničkog savjetovanja do naprednih tehnika pčelarenja. Također, pružamo informacije o nabavi pčelarske opreme i pomagala, kao i o zaštiti zdravlja pčela.
                    </li>
                    <li>
                        <strong>Promocija pčelinjih proizvoda</strong> - Aktivno radimo na promoviranju lokalnih pčelara i njihovih proizvoda, kao što su med, pelud, vosak, propolis i matična mliječ. Kroz educiranje lokalne zajednice i sudjelovanje u manifestacijama, želimo povećati svijest o pčelinjim proizvodima u lokalnoj zajednici.
                    </li>
                </ol>
            </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}