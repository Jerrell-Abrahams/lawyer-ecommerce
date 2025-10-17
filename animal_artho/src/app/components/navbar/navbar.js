import Link from "next/link";
import { Button } from "../button/button";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed w-full flex items-center justify-between md:justify-evenly  h-16 z-50 shadow-md bg-blur-sm bg-white/75 backdrop-blur-md">
            <div className="w-[33%] relative h-16">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        fill
                        style={{ maxHeight: "4rem" }}
                        className="h-16 w-auto max-w-[14rem] object-contain"
                    />
                </Link>
            </div>

            <div className="hidden md:flex md:justify-center items-center space-x-8 w-[33%]">
                <Link href="/" className="text-sm text-gray-500 text-muted-foreground hover:text-[#217f7f] hover:underline underline-offset-4 transition-colors">
                    Home
                </Link>
                <a href="/about" className="text-sm text-gray-500 text-muted-foreground hover:text-[#217f7f] hover:underline underline-offset-4 transition-colors">
                    About
                </a>
                <a href="/contact" className="text-sm text-gray-500 text-muted-foreground hover:text-[#217f7f] hover:underline underline-offset-4 transition-colors">
                    Contact
                </a>
            </div>

            <div className="md:w-[33%] flex justify-end px-3 md:px-8">
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Request Quote
                </Button>
            </div>
        </nav >
    );
};

export default Navbar;