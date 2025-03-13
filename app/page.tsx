"use client";

import Image from "next/image"
import Link from "next/link"
import { PlusCircle, Mail } from "lucide-react"
import NavigationBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { CustomButton } from "@/components/CustomButton";
import NewsSection from "@/components/NewsSection";
import Logo from "@/components/Logo"
import beehive from "../public/beehive.jpg";
import { motion} from "framer-motion";
import articles from "@/data/articles.json"

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
          muted>
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div
        className="max-w-full mx-auto p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <div className="flex flex-col items-center mb-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-black relative inline-block">
            O nama
            <span className="absolute left-1/2 bottom-[-20px] w-[150%] h-1 bg-[#fbb03b] transform -translate-x-1/2"></span>
          </h2>
        </div>
        <div className="flex items-start p-4 rounded-lg">
          <p className="text-2xl text-black text-center leading-relaxed">
            Pčelarska udruga „Vrisak“ iz Vrgorca je aktivna zajednica pčelara koji se bave uzgojem pčela i proizvodnjom kvalitetnih pčelinjih proizvoda. 
            Nastala je s ciljem promicanja pčelarstva kao važnog dijela lokalne tradicije i ekonomije. 
            Naša udruga okuplja strastvene pčelare koji su posvećeni održavanju zdrave pčelinske populacije i proizvodnji meda, pčelinjeg voska i drugih pčelinjih proizvoda.
            <br/>Kroz naš rad, nastojimo edukirati lokalnu zajednicu o važnosti pčelarstva i njegovom utjecaju na okoliš. Također, podržavamo razvoj lokalnog gospodarstva kroz proizvodnju i promociju naših proizvoda.
            <br/><br/>Ako se bavite pčelarstvom i živite na području općine Vrgorac, pridružite nam se! 
          </p>
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <CustomButton className="bg-[#fbb03b] text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#e09e34] transition-all duration-300 transform hover:scale-105 md:text-lg">
            Saznajte više
          </CustomButton>
        </div>
      </motion.div>
      
      {/*Novosti*/}
      <motion.div
        className="max-w-full mx-auto p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
          <NewsSection articles={articles.articles} />
      </motion.div>

      {/*Kontakt*/}
      <motion.div
        className="max-w-full mx-auto p-8 rounded-lg bg-red-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>

      </motion.div>

      <Footer />
      {/* <motion.div
        className="max-w-full mx-auto my-16 p-8 rounded-lg shadow-lg grid md:grid-cols-3 gap-5 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <div className="flex justify-end">
          <p className="text-2xl text-black">
            Ako se bavite pčelarstvom i živite na području općine Vrgorac, pridružite nam se!
          </p>
        </div>
        <div className="h-40 w-0.5 bg-[#fbb03b] mx-auto"></div>
        <div>
          <h2 className="text-5xl font-bold text-black">Članstvo</h2>
        </div>
      </motion.div> */}

      {/* <div className="max-w-6xl mx-auto my-50  grid md:grid-cols-2 gap-8">
          <div>
            <Image 
              src={beehive}
              alt="Beehive"
              width={1920}
              height={1280}/> 
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-300 mb-6">O nama</h2>
            <p className="text-slate-600 mb-4">Mi smo pčelarska udruga iz grada Vrgorca.</p>
            <p className="text-slate-600">U ovom dijelu možete saznati više o nama.</p>
          </div>
      </div> */}
      

      {/* <section className="bg-gray-300 py-16 px-6 flex-1">
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
      </section> */}
    </main>
  )
}