"use client";

import NavigationBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { CustomButton } from "@/components/CustomButton"
import NewsSection from "@/components/NewsSection"
import ScrollToTop from "@/components/ScrollToTop"
import ContactSection from "@/components/ContactSection";
import { motion} from "framer-motion"
import articles from "@/data/articles.json"
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Video Section */}
      <div className="relative w-full max-h-screen overflow-hidden flex justify-center items-center aspect-video bg-black">
        <video
          className="absolute w-full h-screen object-cover"
          autoPlay
          loop
          muted
          disablePictureInPicture
          controlsList="none">
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div
  className="max-w-full mx-auto p-8 rounded-lg"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex flex-col items-center mb-10 relative">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black relative inline-block">
      O nama
      <span className="absolute left-1/2 bottom-[-20px] w-[150%] h-1 bg-[#fbb03b] transform -translate-x-1/2"></span>
    </h2>
  </div>
  <div className="flex items-start p-4 rounded-lg">
    <p className="text-base sm:text-lg md:text-2xl text-black text-center leading-relaxed">
      Pčelarska udruga Vrisak osnovana je s ciljem okupljanja pčelara s područja grada Vrgorca i okolice. Naša udruga nastoji potaknuti razvoj pčelarstva kroz zajedništvo, edukaciju i podršku svim svojim članovima.
      <br />
      Smatramo da je pčelarstvo ne samo poljoprivredna djelatnost, već i važan faktor u očuvanju okoliša i bioraznolikosti, a uz to doprinosi i gospodarskom razvoju lokalne zajednice.
      Udruga je otvorena za sve koji žele učiti, dijeliti iskustva i doprinijeti očuvanju tradicije pčelarstva.
      <br />
      <br />
      Tijekom godina, naša udruga postala je prepoznatljivo mjesto okupljanja pčelara, ali i svih onih koji žele bolje razumjeti važnost pčela i njihovih proizvoda.
      Središnji cilj nam je unaprijediti kvalitetu pčelarenja i širiti svijest o važnosti pčela za ekosustav, kao i za lokalnu ekonomiju.
    </p>
  </div>
  <div className="flex justify-center items-center w-full mt-10">
    <CustomButton className="bg-[#fbb03b] text-white text-base sm:text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#e09e34] transition-all duration-300 transform hover:scale-105">
      <Link href="/misija-vizija">Saznajte više</Link>
    </CustomButton>
  </div>
</motion.div>

      
      {/*Novosti*/}
      <motion.div
        className="w-full "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
          <NewsSection articles={articles.articles} />
      </motion.div>

      {/*Kontakt*/}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
          <ContactSection />
      </motion.div>
      <ScrollToTop />
      <Footer />
    </main>
  )
}