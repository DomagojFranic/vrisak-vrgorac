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
                    src="/clanstvo.jpg"
                    alt="Clanstvo"
                    width={800}
                    height={400}
                    // className="relative w-full aspect-[16/9] rounded-lg shadow-md overflow-hidden"
                    className="w-full max-h-[500px] rounded-lg shadow-md object-cover"
                    priority/>
            </div>
            <header className="text-start">
                <h1 className="text-2xl md:text-3xl font-bold text-black">Članstvo</h1>
            </header>

            <div className="prose max-w-none">
                <p className="text-lg text-black leading-relaxed">
                    Članstvo u Pčelarskoj udruzi „Vrisak“ omogućava svim zainteresiranim pčelarima, bez obzira na njihovu razinu iskustva, da postanu dio zajednice koja dijeli strast prema pčelarstvu. Članovi imaju pravo sudjelovati u svim aktivnostima udruge, pristupiti edukacijama, primati savjete od iskusnijih pčelara i sudjelovati u promociji pčelinjih proizvoda. Za sve nove članove, udruga nudi podršku kroz mentorstvo, organizirane tečajeve i savjetovanja. Članstvo u udruzi također uključuje sudjelovanje u zajedničkim projektima, te mogućnost da doprinosite razvoju pčelarstva na ovom području. <br/><br/>Ako se prepoznaješ u ovome, pridruži nam se!
                </p>
            </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}

