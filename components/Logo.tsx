import Image from "next/image";
import logo from "../public/logo.svg";

export default function Logo() {
    return (
        <Image 
            src={logo}
            alt="Logo"
            width={150}
            height={150}/> //RESPONSIVE
    );
}