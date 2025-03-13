import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Logo from "./Logo"
import '../app/styles.css'

export default function NavigationBar() {
  return (
    <header className="bg-gradient-to-l from-[#fbb03b] to-[#fbb03b]/80 py-4 px-6">
        <div className="relative z-10 max-w-8xl mx-auto flex items-center">
            <div className="flex-shrink-0">
                <Link href="/">
                    <Logo className="border-1 rounded-full border-black"/>
                </Link>
            </div>
            <h1 className="text-3xl font-medium text-black ml-6 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.5)]">
                PČELARSKA UDRUGA „VRISAK“ VRGORAC
            </h1>
            <div className="ml-auto mr-5">
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
                            <Link href="#" legacyBehavior passHref>
                                <NavigationMenuLink className="text-xl font-medium hover:bg-[#fccf89] transition-colors">
                                    Novosti
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="#" legacyBehavior passHref>
                                <NavigationMenuLink className="text-xl font-medium hover:bg-[#fccf89] transition-colors">
                                    U zajednici
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-xl font-medium bg-transparent hover:bg-[#fccf89] focus:bg-[#fccf89] transition-colors data-[state=open]:bg-[#fccf89]/80 rounded-b-none h-11.5">
                                O nama
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="[border-top-left-radius:0] [border-top-right-radius:10px] [border-bottom-left-radius:10px] [border-bottom-right-radius:10px]">
                                <ul className="grid w-48 gap-1 p-2">
                                    <li>
                                        <Link href="#" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3",
                                                    "hover:bg-[#fddfb0] text-md text-black",
                                                )}>
                                                Povijest udruge
                                            </NavigationMenuLink>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3",
                                                    "hover:bg-[#fddfb0] text-md text-black",
                                                )}>
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
                                        <Link href="#" legacyBehavior passHref>
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
                                        <Link href="#" legacyBehavior passHref>
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
                                        <Link href="#" legacyBehavior passHref>
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
            </div>
        </div>
    </header>
  )
}

