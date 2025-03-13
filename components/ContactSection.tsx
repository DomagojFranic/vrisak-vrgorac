import { Building, Info, Phone } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="py-8 px-8 rounded-md w-[1350px]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-black ml-1 mb-8">Kontakt</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Map */}
                    <div className="w-screen md:w-2/3 h-[250px] rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.674796312031!2d17.366944!3d43.206111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134aebbf3e3e3e3f%3A0x3e3e3e3e3e3e3e3e!2sUl.%20fra%20Ivana%20Ro%C5%BEi%C4%87a%2020%2C%20Vrgorac!5e0!3m2!1sen!2shr!4v1620000000000!5m2!1sen!2shr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 ml-5 flex flex-col justify-center space-y-6">
                        <div className="flex items-start gap-3">
                            <Building className="h-5 w-5 text-[#fbb03b] mt-1" />
                            <div>
                                <p className="font-semibold text-black">Adresa</p>
                                <p className="text-black">Ul. fra Ivana Rožića 20, Vrgorac</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-[#fbb03b] mt-1" />
                            <div>
                                <p className="font-semibold text-black">OIB</p>
                                <p className="text-black">15426756326</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Phone className="h-5 w-5 text-[#fbb03b] mt-1" />
                            <div>
                                <p className="font-semibold text-black">Telefon</p>
                                <a href="tel:+38521609155" className="text-blue-500 hover:underline">
                                    +385 21 609 155
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 )
}