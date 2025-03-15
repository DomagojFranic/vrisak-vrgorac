import NavigationBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Zanimljivosti() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <div className="flex-1 flex-col max-w-5xl mx-auto px-6 py-8">
        <article className="flex flex-col gap-6">
            <div className="flex justify-center my-4">
                <Image
                    src="/zanimljivosti.jpg"
                    alt="Zanimljivosti"
                    width={800}
                    height={400}
                    // className="relative w-full aspect-[16/9] rounded-lg shadow-md overflow-hidden"
                    className="w-full max-h-[500px] rounded-lg shadow-md object-cover"
                    priority/>
            </div>
            <header className="text-start">
                <h1 className="text-2xl md:text-3xl font-bold text-black">Jeste li znali?</h1>
            </header>

            <div className="prose max-w-none">
                <p className="text-lg text-black leading-relaxed">
                    U nastavku se nalazi nekoliko zanimljivosti o pčelama kroz koje možete saznati više o njima i njihovoj važnosti.
                </p>
                <p><br/></p>
                <ul className="list-disc pl-6 text-lg text-black leading-relaxed">
                    <li>
                        Pčele imaju pet očiju – dvije velike komponente i tri male točke na vrhu glave koje im pomažu u percepciji pokreta i prepoznavanju objekata u prostoru.
                    </li>
                    <li>
                        Za proizvodnju jednog kilograma meda, pčele moraju posjetiti oko 4 milijuna cvjetova.
                    </li>
                    <li>
                        Pčele komuniciraju kroz svojevrstan ples koji se naziva <strong>pčelinji ples</strong>. Plesom komuniciraju udaljenost izvora hrane, smjer hrane u odnosu na sunce i moguće opasnosti.
                    </li>
                    <li>
                        Matica pčela živi 2-3 godine i liježe do 2000 jaja dnevno. Dronovi služe isključivo za parenje s maticom nakon čega uginu.
                    </li>
                    <li>
                        Ako matica pčela umre, pčele će proizvesti novu maticu na način da odabere larvu tj. pčelu koja se tek izlegla, i hrane ju hranom za matice – <strong>matičnom mliječi</strong>. Na ovaj način će se novoodabrana matica razviti u plodnu maticu pčela.
                    </li>
                    <li>
                        Radne pčele su neplodne ženske pčele koje ne liježu jaja, a njihovi zadatci uključuju potragu za hranom te gradnju i zaštitu košnice.
                    </li>
                    <li>
                        Jedna pčela radilica proizvede oko 1/12 čajne žlice meda u svom životu koji traje 5-6 tjedana.
                    </li>
                    <li>
                        Pčele su nevjerojatni letači. Lete brzinom od oko 25km/h i mogu zamahnuti krilima čak 200 puta u sekundi.
                    </li>
                    <li>
                        Samo <strong>ženske pčele mogu ubosti</strong>, a najčešće ubodu pčele radilice. Pčele bodu kada se osjećaju ugroženo, stoga ako pčela leti oko vas nemojte mahati rukama i raditi nagle pokrete. Ostanite u mirnom položaju dok pčela ne ode. Ovo je iznimno važno zbog toga što pčele jednom kada ubodu – uginu.
                    </li>
                    <li>
                        Točan broj pčela u pčelinjaku teško je procijeniti, ali se smatra da jedan pčelinjak može imati između 20.000 i 60.000 pčela.
                    </li>
                    <li>
                        Kako bi se ugrijale zimi, pčele se skupljaju u tzv. <strong>„zimski grozd“</strong>.
                    </li>
                    <li>
                        Pčele su jedini insekti koji proizvode hranu koju jedu ljudi.
                    </li>
                </ul>
            </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}