"use client"
import Link from "next/link"
import Image from "next/image"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Logo from "./Logo"

export default function NavigationBar() {
  return (
    <header className="bg-white py-4 px-6 shadow- sm">
      <div className="max-w-8xl mx-auto flex items-center relative">
        <div className="flex-shrink-0">
          <Link href="/">
            <Logo/>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-slate-700 absolute ml-50 text-nowrap ">
          Pčelarska udruga "Vrisak" Vrgorac
        </h1>

        <div className="ml-auto mr-5">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-xl font-medium text-slate-700 hover:text-blue-700 transition-colors">
                    Naslovnica
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="text-xl font-medium text-slate-700 hover:text-blue-700 transition-colors">
                    Novosti
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="text-xl font-medium text-slate-700 hover:text-blue-700 transition-colors">
                    U zajednici
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-medium text-slate-700 hover:text-blue-700 transition-colors">
                  O nama
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2">
                    <li>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3",
                            "hover:bg-slate-100 text-sm text-slate-700",
                          )}
                        >
                          Povijest udruge
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3",
                            "hover:bg-slate-100 text-sm text-slate-700",
                          )}
                        >
                          Članovi
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3",
                            "hover:bg-slate-100 text-sm text-slate-700",
                          )}
                        >
                          Statut
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/kontakt" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3",
                            "hover:bg-slate-100 text-sm text-slate-700",
                          )}
                        >
                          Kontakt
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-medium text-slate-700 hover:text-blue-700 transition-colors">
                  Zanimljivosti
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2">
                    <li>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3",
                            "hover:bg-slate-100 text-sm text-slate-700",
                          )}
                        >
                          Vrste meda
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3",
                            "hover:bg-slate-100 text-sm text-slate-700",
                          )}
                        >
                          Pčelinji proizvodi
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3",
                            "hover:bg-slate-100 text-sm text-slate-700",
                          )}
                        >
                          Savjeti za pčelare
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3",
                            "hover:bg-slate-100 text-sm text-slate-700",
                          )}
                        >
                          Galerija
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

