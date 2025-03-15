import NavigationBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function MisijaVizija() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <div className="flex-1 flex-col max-w-5xl mx-auto px-6 py-8">
        <article className="flex flex-col gap-6">
            <div className="flex justify-center my-4">
                <Image
                    src="/misijaVizija.jpg"
                    alt="Misija i vizija"
                    width={800}
                    height={400}
                    className="relative w-full aspect-[16/9] rounded-lg shadow-md overflow-hidden"
                    // className="w-full max-h-[500px] rounded-lg shadow-md object-cover"
                    priority/>
            </div>
            <header className="text-start">
                <h1 className="text-2xl md:text-3xl font-bold text-black">Misija</h1>
            </header>

            <div className="prose max-w-none">
                <p className="text-lg text-black leading-relaxed">
                    Misija Pčelarske udruge „Vrisak“ jest stvaranje zajednice koja će pomoći svim članovima da postanu uspješni pčelari. Kroz organiziranje edukacija, dijeljenje iskustava i pružanje stručne pomoći, naš cilj je da svi naši članovi razvijaju svoje pčelarske vještine i unaprijede kvalitetu svojih proizvoda. Želimo biti udruga koja je prepoznatljiva po svojoj izvrsnosti u pčelarstvu, koja nudi pomoć svojim članovima i aktivno doprinosi razvoju pčelarstva u lokalnoj zajednici.
                </p>
            </div>

            <header className="text-start">
                <h1 className="text-2xl md:text-3xl font-bold text-black">Vizija</h1>
            </header>

            <div className="prose max-w-none">
                <p className="text-lg text-black leading-relaxed">
                    Naša vizija je postati vodeća pčelarska organizacija u okruženju, prepoznatljiva po svojoj stručnosti, zajedništvu i angažmanu na promociji pčelarstva. Pružanjem podrške svojim članovima i promoviranjem pčelinjih proizvoda, želimo potaknuti rast i razvoj pčelarstva u cijeloj lokalnoj zajednici, čineći našu udrugu simbolom kvalitete i održivosti.
                </p>
            </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}

