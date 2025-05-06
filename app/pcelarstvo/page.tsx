import NavigationBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Pcelarstvo() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <div className="flex-1 flex-col max-w-5xl mx-auto px-6 py-8">
        <article className="flex flex-col gap-6">
            <div className="flex justify-center my-4">
                <Image
                    src="/pcelarstvo.jpg"
                    alt="Pcelarstvo"
                    width={800}
                    height={400}
                    // className="relative w-full aspect-[16/9] rounded-lg shadow-md overflow-hidden"
                    className="w-full max-h-[500px] rounded-lg shadow-md object-cover"
                    priority/>
            </div>
            <header className="text-start">
                <h1 className="text-2xl md:text-3xl font-bold text-black">O pčelarstvu</h1>
            </header>

            <div className="prose max-w-none">
                <p className="text-lg text-black leading-relaxed">
                    Pčelarstvo je jedna od najvažnijih poljoprivrednih djelatnosti u svijetu. Pčele su važne ne samo zbog meda koji proizvode, već i zbog svoje ključne uloge u oprašivanju biljaka i održavanju ekosustava. Bez pčela, mnoge biljne vrste ne bi mogle opstati, što bi imalo katastrofalne posljedice na lanac prehrane i održavanje životne sredine.
                    <br/>Pčelarstvo je također važna gospodarska djelatnost koja ima značajan utjecaj na poljoprivredu. Med, vosak, matična mliječ i propolis samo su neki od vrijednih proizvoda koje pčele proizvode. Ovi proizvodi se koriste u prehrambenoj industriji, kozmetičkoj industriji, medicini i drugim sektorima.
                    <br/><br/>Međutim, pčelarstvo je danas suočeno s mnogim izazovima. Pčele se suočavaju s različitim prijetnjama, uključujući gubitak staništa, klimatske promjene, pesticidi i bolesti. Stoga je važno poduzeti mjere kako bi se pčele zaštitile i očuvale njihove populacije. Jedna od ključnih mjera za zaštitu pčela je educiranje ljudi o njihovoj važnosti. Pčelarske udruge organiziraju razne događaje, poput seminara, radionica i predavanja, kako bi educirale javnost o pčelarstvu i pčelama. Osim toga, mnoge udruge poduzimaju akcije za očuvanje pčelinjih staništa, kao što su sadnja medonosnih biljaka i izgradnja košnica.
                    <br/><br/>Pčelarska oprema također igra važnu ulogu u pčelarstvu. Pčelari koriste različite alate i opremu za zaštitu od uboda pčela i za manipulaciju košnicama. Oprema se mora pažljivo održavati kako bi se osigurala sigurnost i zdravlje pčela.
                    <br/><br/>U Hrvatskoj, pčelarstvo ima dugu tradiciju i važnu ulogu u gospodarstvu. Prema podacima Hrvatske agencije za poljoprivredu i hranu, u Hrvatskoj postoji više od 10.000 registriranih pčelara, a godišnje se proizvede oko 4.000 tona meda. Ova djelatnost pridonosi ruralnom razvoju, očuvanju prirodnih resursa i održivom razvoju. U konačnici, pčelarstvo je važna djelatnost za održavanje ekosustava i gospodarstva te je bitno educirati javnost o njegovoj važnosti. Pčele su vrlo osjetljivi organizmi i njihov nestanak bi imao katastrofalne posljedice na okoliš i poljoprivredu.  Jedna od mjera koje se mogu poduzeti je smanjenje upotrebe pesticida i drugih kemikalija u poljoprivredi. Osim toga, mogu se poduzeti i druge mjere poput promocije uzgoja medonosnih biljaka u poljoprivredi i u gradskim sredinama, te poticanje pčelarstva kroz subvencije i druge poticaje.
                    <br/><br/>Pčelari mogu igrati ključnu ulogu u očuvanju pčela i njihovih staništa. Pčelarske udruge i organizacije mogu organizirati edukacijske programe za djecu i odrasle, pomoći u izgradnji novih košnica, te promicati uzgoj medonosnih biljaka u javnim prostorima i na privatnim zemljištima. U Hrvatskoj postoji nekoliko organizacija koje se bave pčelarstvom, poput Hrvatskog pčelarskog saveza i Udruge pčelara. Ove organizacije pomažu u zaštiti pčela i njihovih staništa te educiraju javnost o važnosti pčela za održavanje ekosustava.
                </p>
            </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}