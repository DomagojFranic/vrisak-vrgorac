// import Link from "next/link"
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
// import { cn } from "@/lib/utils"
// import Logo from "./Logo"
// import '../app/styles.css'

// export default function NavigationBar() {
//   return (
//     <header className="bg-gradient-to-l from-[#fbb03b] to-[#fbb03b]/80 py-4 px-6">
//         <div className="relative z-10 max-w-8xl mx-auto flex items-center">
//             <div className="flex-shrink-0">
//                 <Link href="/">
//                     <Logo className="border-1 rounded-full border-black"/>
//                 </Link>
//             </div>
//             <h1 className="text-3xl font-medium text-black ml-6 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.5)]">
//                 PČELARSKA UDRUGA „VRISAK“ VRGORAC
//             </h1>
//             <div className="ml-auto mr-5">
//                 <NavigationMenu className="text-black">
//                     <NavigationMenuList className="flex space-x-6">
//                         <NavigationMenuItem>
//                             <Link href="/" legacyBehavior passHref>
//                                 <NavigationMenuLink className="text-xl font-medium hover:bg-[#fccf89] transition-colors">
//                                     Naslovnica
//                                 </NavigationMenuLink>
//                             </Link>
//                         </NavigationMenuItem>

//                         <NavigationMenuItem>
//                             <Link href="/novosti" legacyBehavior passHref>
//                                 <NavigationMenuLink className="text-xl font-medium hover:bg-[#fccf89] transition-colors">
//                                     Novosti
//                                 </NavigationMenuLink>
//                             </Link>
//                         </NavigationMenuItem>

//                         <NavigationMenuItem>
//                             <Link href="/zajednica" legacyBehavior passHref>
//                                 <NavigationMenuLink className="text-xl font-medium hover:bg-[#fccf89] transition-colors">
//                                     U zajednici
//                                 </NavigationMenuLink>
//                             </Link>
//                         </NavigationMenuItem>

//                         <NavigationMenuItem>
//                             <NavigationMenuTrigger className="text-xl font-medium bg-transparent hover:bg-[#fccf89] focus:bg-[#fccf89] transition-colors data-[state=open]:bg-[#fccf89]/80 rounded-b-none h-11.5">
//                                 O nama
//                             </NavigationMenuTrigger>
//                             <NavigationMenuContent className="[border-top-left-radius:0] [border-top-right-radius:10px] [border-bottom-left-radius:10px] [border-bottom-right-radius:10px]">
//                                 <ul className="grid w-48 gap-1 p-2">
//                                     <li>
//                                         <Link href="/misija-vizija" legacyBehavior passHref>
//                                             <NavigationMenuLink
//                                                 className={cn(
//                                                     "block select-none space-y-1 rounded-md p-3",
//                                                     "hover:bg-[#fddfb0] text-md text-black",
//                                                 )}>
//                                                 Misija i vizija
//                                             </NavigationMenuLink>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/ciljevi-aktivnosti" legacyBehavior passHref>
//                                             <NavigationMenuLink
//                                                 className={cn(
//                                                     "block select-none space-y-1 rounded-md p-3",
//                                                     "hover:bg-[#fddfb0] text-md text-black",
//                                                 )}>
//                                                 Ciljevi i aktivnosti
//                                             </NavigationMenuLink>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/povijest" legacyBehavior passHref>
//                                             <NavigationMenuLink
//                                                 className={cn(
//                                                     "block select-none space-y-1 rounded-md p-3",
//                                                     "hover:bg-[#fddfb0] text-md text-black",
//                                                 )}>
//                                                 Povijest udruge
//                                             </NavigationMenuLink>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/clanstvo" legacyBehavior passHref>
//                                             <NavigationMenuLink
//                                                 className={cn(
//                                                     "block select-none space-y-1 rounded-md p-3",
//                                                     "hover:bg-[#fddfb0] text-md text-black",
//                                                 )}>
//                                                 Članstvo
//                                             </NavigationMenuLink>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </NavigationMenuContent>
//                         </NavigationMenuItem>

                        // <NavigationMenuItem>
                        //     <NavigationMenuTrigger className="text-xl font-medium bg-transparent hover:bg-[#fccf89] focus:bg-[#fccf89] transition-colors data-[state=open]:bg-[#fccf89]/80 rounded-b-none h-11.5">
                        //         Zanimljivosti
                        //     </NavigationMenuTrigger>
                        //     <NavigationMenuContent className="[border-top-left-radius:0] [border-top-right-radius:10px] [border-bottom-left-radius:10px] [border-bottom-right-radius:10px]">
                        //         <ul className="grid w-48 gap-1 p-2">
                        //             <li>
                        //                 <Link href="/pcelarstvo" legacyBehavior passHref>
                        //                     <NavigationMenuLink
                        //                         className={cn(
                        //                             "block select-none space-y-1 rounded-md p-3",
                        //                             "hover:bg-[#fddfb0] text-md text-black",
                        //                         )}>
                        //                         O pčelarstvu
                        //                     </NavigationMenuLink>
                        //                 </Link>
                        //             </li>
                        //             <li>
                        //                 <Link href="/pcele" legacyBehavior passHref>
                        //                     <NavigationMenuLink
                        //                         className={cn(
                        //                             "block select-none space-y-1 rounded-md p-3",
                        //                             "hover:bg-[#fddfb0] text-md text-black",
                        //                         )}>
                        //                         O pčelama
                        //                     </NavigationMenuLink>
                        //                 </Link>
                        //             </li>
                        //             <li>
                        //                 <Link href="/zanimljivosti" legacyBehavior passHref>
                        //                     <NavigationMenuLink
                        //                         className={cn(
                        //                             "block select-none space-y-1 rounded-md p-3",
                        //                             "hover:bg-[#fddfb0] text-md text-black",
                        //                         )}>
                        //                         Jeste li znali?
                        //                     </NavigationMenuLink>
                        //                 </Link>
                        //             </li>
                        //         </ul>
                        //     </NavigationMenuContent>
                        // </NavigationMenuItem>
//                     </NavigationMenuList>
//                 </NavigationMenu>
//             </div>
//         </div>
//     </header>
//   )
// }
"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import "../app/styles.css";

export default function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-l from-[#fbb03b] to-[#fbb03b]/80 py-4 px-6">
            <div className="relative z-10 max-w-8xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <Logo className="border-1 rounded-full border-black" />
                    </Link>
                    <h1 className="hidden lg:block text-2xl md:text-3xl font-medium text-black [text-shadow:_1px_1px_2px_rgba(0,0,0,0.5)]">
                        PČELARSKA UDRUGA „VRISAK“ VRGORAC
                    </h1>
                </div>

                {/* Desktop Menu (Hidden on Small Screens) */}
                <nav className="hidden lg:flex ml-auto mr-5">
                    <NavigationMenu className="text-black">
                        <NavigationMenuList className="flex space-x-6">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="text-xl font-medium hover:bg-[#fccf89] transition-colors">
                                        Naslovnica
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/novosti" legacyBehavior passHref>
                                    <NavigationMenuLink className="text-xl font-medium hover:bg-[#fccf89] transition-colors">
                                        Novosti
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/zajednica" legacyBehavior passHref>
                                    <NavigationMenuLink className="text-xl font-medium hover:bg-[#fccf89] transition-colors whitespace-nowrap">
                                        U zajednici
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-xl font-medium bg-transparent hover:bg-[#fccf89] transition-colors">
                                    O nama
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-48 gap-1 p-2">
                                        <li>
                                            <Link href="/misija-vizija" legacyBehavior passHref>
                                                <NavigationMenuLink className="block p-3 hover:bg-[#fddfb0] text-md text-black">
                                                    Misija i vizija
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ciljevi-aktivnosti" legacyBehavior passHref>
                                                <NavigationMenuLink className="block p-3 hover:bg-[#fddfb0] text-md text-black">
                                                    Ciljevi i aktivnosti
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/povijest" legacyBehavior passHref>
                                                <NavigationMenuLink className="block p-3 hover:bg-[#fddfb0] text-md text-black">
                                                    Povijest udruge
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/clanstvo" legacyBehavior passHref>
                                                <NavigationMenuLink className="block p-3 hover:bg-[#fddfb0] text-md text-black">
                                                    Članstvo
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-xl font-medium bg-transparent hover:bg-[#fccf89] focus:bg-[#fccf89] transition-colors data-[state=open]:bg-[#fccf89]/80 rounded-b-none h-11.5">
                                Zanimljivosti
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="[border-top-left-radius:0] [border-top-right-radius:10px] [border-bottom-left-radius:10px] [border-bottom-right-radius:10px]">
                                <ul className="grid w-48 gap-1 p-2">
                                    <li>
                                        <Link href="/pcelarstvo" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3",
                                                    "hover:bg-[#fddfb0] text-md text-black",
                                                )}>
                                                O pčelarstvu
                                            </NavigationMenuLink>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pcele" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3",
                                                    "hover:bg-[#fddfb0] text-md text-black",
                                                )}>
                                                O pčelama
                                            </NavigationMenuLink>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/zanimljivosti" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3",
                                                    "hover:bg-[#fddfb0] text-md text-black",
                                                )}>
                                                Jeste li znali?
                                            </NavigationMenuLink>
                                        </Link>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Hamburger Menu (Visible on Small Screens) */}
                <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="h-8 w-8 text-black" /> : <Menu className="h-8 w-8 text-black" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <nav className="lg:hidden absolute top-full left-0 w-full bg-[#fbb03b] shadow-md z-50">
                    <ul className="flex flex-col text-black text-xl font-medium">
                        <li>
                            <Link href="/" className="block py-3 px-6 hover:bg-[#fccf89]" onClick={() => setMenuOpen(false)}>
                                Naslovnica
                            </Link>
                        </li>
                        <li>
                            <Link href="/novosti" className="block py-3 px-6 hover:bg-[#fccf89]" onClick={() => setMenuOpen(false)}>
                                Novosti
                            </Link>
                        </li>
                        <li>
                            <Link href="/zajednica" className="block py-3 px-6 hover:bg-[#fccf89] whitespace-nowrap" onClick={() => setMenuOpen(false)}>
                                U zajednici
                            </Link>
                        </li>
                        <li>
                            <button className="w-full text-left py-3 px-6 hover:bg-[#fccf89]" onClick={() => setMenuOpen(false)}>
                                O nama
                            </button>
                            <ul className="bg-[#fccf89]">
                                <li>
                                    <Link href="/misija-vizija" className="block py-2 px-8 hover:bg-[#fddfb0]" onClick={() => setMenuOpen(false)}>
                                        Misija i vizija
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ciljevi-aktivnosti" className="block py-2 px-8 hover:bg-[#fddfb0]" onClick={() => setMenuOpen(false)}>
                                        Ciljevi i aktivnosti
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/povijest" className="block py-2 px-8 hover:bg-[#fddfb0]" onClick={() => setMenuOpen(false)}>
                                        Povijest udruge
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/clanstvo" className="block py-2 px-8 hover:bg-[#fddfb0]" onClick={() => setMenuOpen(false)}>
                                        Članstvo
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button className="w-full text-left py-3 px-6 hover:bg-[#fccf89]" onClick={() => setMenuOpen(false)}>
                                Zanimljivosti
                            </button>
                            <ul className="bg-[#fccf89]">
                                <li>
                                    <Link href="/pcelarstvo" className="block py-2 px-8 hover:bg-[#fddfb0]" onClick={() => setMenuOpen(false)}>
                                        O pčelarstvu
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pcele" className="block py-2 px-8 hover:bg-[#fddfb0]" onClick={() => setMenuOpen(false)}>
                                        O pčelama
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/zanimljivosti" className="block py-2 px-8 hover:bg-[#fddfb0]" onClick={() => setMenuOpen(false)}>
                                        Jeste li znali?
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
