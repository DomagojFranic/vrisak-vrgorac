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
                    src="/povijest.jpg"
                    alt="Misija i vizija"
                    width={800}
                    height={400}
                    // className="relative w-full aspect-[16/9] rounded-lg shadow-md overflow-hidden"
                    className="w-full max-h-[500px] rounded-lg shadow-md object-cover"
                    priority/>
            </div>
            <header className="text-start">
                <h1 className="text-2xl md:text-3xl font-bold text-black">Povijest udruge</h1>
            </header>

            <div className="prose max-w-none">
                <p className="text-lg text-black leading-relaxed">
                    Pčelarska udruga „Vrisak“ nastala je kao entuzijastični poduhvat nekolicine zaljubljenika u pčelarstvo.<br/><br/> Na početku je bila mala skupina ljudi koji su dijelili strast prema pčelama i željeli unaprijediti svoje vještine i znanje. S vremenom, udruga je rasla i razvijala se, te danas broji više od 50 članova. Tijekom godina, mnogi članovi su se posvetili razvoju udruge, a sva upravljačka tijela, kroz svoj rad, dali su značajan doprinos ostvarenju naših ciljeva. Zahvaljujemo svim dosadašnjim članovima uprave na njihovom trudu, odricanju i postignućima, koji su omogućili uspješan razvoj udruge. Njihova predanost postavila je temelje za buduće generacije pčelara i jamči da će naša udruga i dalje rasti, razvijati se i ostati vjerna svojoj misiji.
                </p>
            </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}

