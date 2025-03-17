import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { CustomButton } from "./CustomButton"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
    images: string[]
    alt: string
    className?: string
}

export function ImageGallery({ images, alt, className }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }, [images.length])

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, [images.length])

    const openModal = useCallback(() => {
        setIsModalOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])
    
    {/*Wrapping this function into useCallback to prevent it from being recreated on every render.*/}
    const handleEscKey = useCallback((event: KeyboardEvent) => { 
        if (event.key === "Escape") {
            closeModal()
        }
    }, [closeModal])

    const handleArrowKeys = useCallback((event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
            handlePrevious()
        } 
        else if (event.key === "ArrowRight") {
            handleNext()
        }
        else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault()
        }
    }, [handlePrevious, handleNext])

    const handleOutsideClick = useCallback((event: MouseEvent) => {
        if ((event.target as HTMLElement).id === "modal-background") {
            closeModal()
        }
    }, [closeModal])

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener("keydown", handleEscKey)
            document.addEventListener("keydown", handleArrowKeys)
            document.addEventListener("mousedown", handleOutsideClick)
        }

        return () => {
            document.removeEventListener("keydown", handleEscKey)
            document.removeEventListener("keydown", handleArrowKeys)
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [isModalOpen, handleEscKey, handleArrowKeys, handleOutsideClick])

    if (images.length === 0) {
        return (
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Nema dostupnih slika</p>
            </div>
        )
    }

    return (
        <div className={cn("relative", className)}>
            <div className="relative h-64 md:h-96 lg:h-[450px] xl:h-[550px] w-full mb-6 rounded-lg overflow-hidden cursor-pointer">
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={alt}
                    fill
                    className="object-cover"
                    onClick={openModal}/>

                {/* Left navigation button */}
                {images.length > 1 && (
                    <CustomButton
                        onClick={handlePrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-[#fbb03b] hover:bg-black/60 transition-colors"
                        aria-label="Prethodna slika">
                        <ChevronLeft className="h-6 w-6 text-[#fbb03b]" />
                    </CustomButton>
                )}

                {/* Right navigation button */}
                {images.length > 1 && (
                    <CustomButton
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-[#fbb03b] hover:bg-black/60 transition-colors"
                        aria-label="Sljedeća slika">
                        <ChevronRight className="h-6 w-6 text-[#fbb03b]" />
                    </CustomButton>
                )}

                {/* Image indicator (small dots or cloud) */}
                {images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-[#fbb03b] px-3 py-1 rounded-full text-xs">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div id="modal-background" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <CustomButton
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-primary"
                        aria-label="Zatvori">
                        <X className="h-8 w-8 text-[#fbb03b]"/>
                    </CustomButton>

                    {images.length > 1 && (
                        <CustomButton
                            onClick={handlePrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                            aria-label="Prethodna slika">
                            <ChevronLeft className="h-8 w-8 text-[#fbb03b]" />
                        </CustomButton>
                    )}

                    <div className="relative w-full max-w-4xl h-[80vh]">
                        <Image
                            src={images[currentIndex] || "/placeholder.svg"}
                            alt={`${alt} - slika ${currentIndex + 1}`}
                            fill
                            className="object-contain"/>

                        {images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-[#fbb03b] px-3 py-1 rounded-full">
                                {currentIndex + 1} / {images.length}
                            </div>
                        )}
                    </div>

                    {images.length > 1 && (
                        <CustomButton
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                            aria-label="Sljedeća slika">
                            <ChevronRight className="h-8 w-8 text-[#fbb03b]" />
                        </CustomButton>
                    )}
                </div>
            )}
        </div>
    )
}