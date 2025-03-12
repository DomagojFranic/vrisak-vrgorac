import Image from "next/image";
import logo from "../public/logo.svg";

export default function Logo({ className }: { className: string }) {
    return (
        <Image 
            className={className}
            src={logo}
            alt="Logo"
            width={100}
            height={100}/> //RESPONSIVE
    );
}