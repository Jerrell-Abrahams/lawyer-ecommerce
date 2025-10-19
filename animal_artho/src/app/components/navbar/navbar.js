"use client";

import Link from "next/link";
import { Button } from "../button/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Home, Info, Phone } from "lucide-react";
const Navbar = () => {
  const [is_mobile, setIsMobile] = useState(false);
  const [menu_open, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (is_mobile) {
    return (
      <nav className="fixed w-full top-0 left-0 z-50 bg-white/75 backdrop-blur-md shadow-md">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menu_open)}
            className="text-gray-700 p-2 rounded-md hover:bg-gray-100 transition"
          >
            {menu_open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menu_open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 space-y-4 rounded-b-2xl animate-dropdown z-40">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-11/12 md:w-2/3 py-3 rounded-xl text-lg font-medium text-gray-700 hover:text-[#217f7f] hover:bg-gray-50 transition"
            >
              <Home size={22} className="align-middle inline-block" />
              <span className="align-middle">Home</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-11/12 md:w-2/3 py-3 rounded-xl text-lg font-medium text-gray-700 hover:text-[#217f7f] hover:bg-gray-50 transition"
            >
              <Info size={22} className="align-middle inline-block" />
              <span className="align-middle">About</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-11/12 md:w-2/3 py-3 rounded-xl text-lg font-medium text-gray-700 hover:text-[#217f7f] hover:bg-gray-50 transition"
            >
              <Phone
                size={22}
                className="align-middle inline-block ml-4"
              />
              <span className="align-middle">Contact</span>
            </Link>
          </div>
        )}
      </nav>
    );
  }

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
        <Link
          href="/"
          className="text-sm text-gray-500 text-muted-foreground hover:text-[#217f7f] hover:underline underline-offset-4 transition-colors"
        >
          Home
        </Link>
        <a
          href="/about"
          className="text-sm text-gray-500 text-muted-foreground hover:text-[#217f7f] hover:underline underline-offset-4 transition-colors"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-sm text-gray-500 text-muted-foreground hover:text-[#217f7f] hover:underline underline-offset-4 transition-colors"
        >
          Contact
        </a>
      </div>

      <div className="md:w-[33%] flex justify-end px-3 md:px-8">
        <Button size="sm" className="bg-accent hover:bg-accent/90">
          Request Quote
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
