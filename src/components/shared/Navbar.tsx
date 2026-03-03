"use client"

import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 w-full z-50 bg-black">
      <div className=" px-4 md:px-6 lg:px-16 py-2 flex justify-between items-center">
        <Link href="/" className="flex lg:flex-col items-center gap-1">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </Link>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative cursor-pointer group font-medium text-lg text-gray-400 hover:text-[#615FFF]  transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#615FFF]  transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Link href="/" className=" text-sm lg:text-[15px] px-3.5 lg:px-7 py-1.5 lg:py-3 rounded-full bg-[#615FFF] shadow-sm lg:shadow-md shadow-[#615FFF] hover:bg-[#625fffd7] duration-300">
            Start Your Project
          </Link>

          <div className="md:hidden">
            <Hamburger
              size={25}
              color="gray"
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden overflow-hidden rounded-b-lg bg-black"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 font-semibold text-center text-gray-400 hover:text-[#615FFF] duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
