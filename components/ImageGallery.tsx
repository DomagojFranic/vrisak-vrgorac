import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { CustomButton } from "./CustomButton"

interface ImageGalleryProps {
    images: string[]
    alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    
    {/*Wrapping this function into useCallback to prevent it from being recreated on every render.*/}
    const handleEscKey = useCallback((event: KeyboardEvent) => { 
        if (event.key === "Escape") {
            closeModal()
        }
    }, [closeModal])

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener("keydown", handleEscKey)
        }

        return () => {
            document.removeEventListener("keydown", handleEscKey)
        }
    }, [isModalOpen, handleEscKey])

    if (images.length === 0) {
        return (
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Nema dostupnih slika</p>
            </div>
        )
    }

    if (images.length === 1) {
        return (
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden cursor-pointer" onClick={openModal}>
                <Image src={images[0] || "/placeholder.svg"} alt={alt} fill className="object-cover" />

                {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <CustomButton
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-primary"
                        aria-label="Zatvori">
                        <X className="h-8 w-8" />
                    </CustomButton>
                    <div className="relative w-full max-w-4xl h-[80vh]">
                        <Image src={images[0] || "/placeholder.svg"} alt={alt} fill className="object-contain" />
                    </div>
                </div>
                )}
            </div>
        )
    }

    return (
        <div className="mb-6">
            <div className="relative h-100 w-full rounded-lg overflow-hidden cursor-pointer" onClick={openModal}>
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${alt} - slika ${currentIndex + 1}`}
                    fill
                    className="object-cover"/>

                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 text-xs rounded">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-2 gap-2">
                <CustomButton
                    onClick={handlePrevious}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Prethodna slika">
                    <ChevronLeft className="h-10 w-10 text-black" />
                </CustomButton>

                <div className="flex gap-2 items-center">
                    {images.map((_, index) => (
                        <CustomButton
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                            "w-2 h-2 rounded-[10] transition-all",
                            currentIndex === index ? "bg-[#fbb03b] scale-125" : "bg-muted-foreground/30",
                            )}
                            aria-label={`Prijeđi na sliku ${index + 1}`}/>
                    ))}
                </div>

                <CustomButton
                    onClick={handleNext}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Sljedeća slika">
                    <ChevronRight className="h-10 w-10 text-black" />
                </CustomButton>
            </div>

            {isModalOpen && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                <CustomButton
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white hover:text-primary"
                    aria-label="Zatvori">
                    <X className="h-8 w-8 text-[#fbb03b]" />
                </CustomButton>

                <CustomButton
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                    aria-label="Prethodna slika">
                    <ChevronLeft className="h-8 w-8 text-[#fbb03b]" />
                </CustomButton>

                <div className="relative w-full max-w-4xl h-[80vh]">
                    <Image
                        src={images[currentIndex] || "/placeholder.svg"}
                        alt={`${alt} - slika ${currentIndex + 1}`}
                        fill
                        className="object-contain"/>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-[#fbb03b] px-3 py-1 rounded-full">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                <CustomButton
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                    aria-label="Sljedeća slika">
                    <ChevronRight className="h-8 w-8 text-[#fbb03b]" />
                </CustomButton>
            </div>
            )}
        </div>
    )
}