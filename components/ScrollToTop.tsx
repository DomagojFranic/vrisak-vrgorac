import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } 
            else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
            {isVisible && (
            <Button className="fixed bottom-8 right-8 z-50 rounded-full p-3 shadow-lg bg-[#fbb03b]" onClick={scrollToTop} size="icon">
                <ArrowUp className="h-5 w-5" />
                <span className="sr-only">Scroll to top</span>
            </Button>
            )}
        </>
    )
}