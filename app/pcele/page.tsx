import NavigationBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Pcele() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <div className="flex-1 flex-col max-w-5xl mx-auto px-6 py-8">
        <article className="flex flex-col gap-6">
            <div className="flex justify-center my-4">
                <Image
                    src="/pcele.jpg"
                    alt="Pcele"
                    width={800}
                    height={400}
                    // className="relative w-full aspect-[16/9] rounded-lg shadow-md overflow-hidden"
                    className="w-full max-h-[500px] rounded-lg shadow-md object-cover"
                    priority/>
            </div>
            <header className="text-start">
                <h1 className="text-2xl md:text-3xl font-bold text-black">O pčelama</h1>
            </header>

            <div className="prose max-w-none">
                <p className="text-lg text-black leading-relaxed">
                    <i>Anthophila</i> (pčele) je kladus – grupa oblika života koja se sastoji od zajedničkog pretka i svih njegovih potomaka i predstavlja jedinstvenu granu na stablu života – u kojem je 20.000 poznatih vrsta pčela razvrstanih u sedam porodica, od kojih je najveća <i>Apidae</i>.
                    <br/>Pčela je bilo koja vrsta letećih kukaca u kladusu <i>Anthophila</i> iz reda <i>Hymenoptera</i> (opnokrilci), natfamilije <i>Apoidea</i> (cvjetari). Pčele su blisko srodne osama i mravima. Glavna osobina svih pčela je da za prehranu sakupljaju cvjetni pelud, kao izvor bjelančevina i cvjetni nektar kao izvor ugljikohidrata. Najbolje poznata vrsta je europska medonosna pčela. Na Zemlji postoji oko 20.000 vrsta u sedam porodica rasprostranjenih skoro u svim područjima svijeta.
                    <br/>Veličina se kreće od 2 mm do 4 cm. Pretežno su crne ili sive boje. Osnovna podjela je prema načinu njihovog života na solitarne i društvene pčele.
                    Neke vrste uključujući medonosne pčele, bumbare, i bezžaočne pčele žive društveno u kolonijama. Pčele su prilagođene za hranjenje nektarom i peludom, pri čemu je nektar primarni izvor energije, dok je pelud primarni izvor bjelančevina i drugih nutrijenata. Najveći dio peluda koristi se kao hrana za larve. Polinacija pčelama je ekološki i komercijalno važna; deklinacija populacije divljih pčela povećala je značaj polinacije komercijalno održavanim rojevima medonosnih pčela.
                    Najzastupljenije pčele u sjevernoj hemisferi su <i>Halictidae</i>, ili znojne pčele, ali one su male i često se poistovjećuju s osama i muhama. Predatori pčela su ptice poput pčelarica, dok su među insektnim predatorima pčelinji vukovi i vilini konjici.
                    <br/>Pčelarstvo ili apikultura se prakticira već tisućljećima, ili bar od vremena antičkog Egipta i Grčke. Osim meda i polinacije, pčele proizvode pčelinji vosak, matičnu mliječ i propolis. Pčele se javljaju u mitologiji i folkloru od drevnih vremena, i one se javljaju u raznovrsnim literarnim radovima. Pčele su simbol radinosti i reda, a u nekim kulturama i simbol božanstva i besmrtnosti.
                </p>
            </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}

