"use client"

import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "../../../public/logo.png"

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav className="fixed left-0 top-0 w-full z-50 bg-black">
      <div className=" px-4 md:px-6 lg:px-16 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 md:gap-2">
          <Image priority src={logo} width={25} height={25} alt="logo" />
          <span className="text-white font-semibold text-[17px] md:text-[20px]">AxonDev</span>
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
          <Link
            href="/"
            className=" text-sm lg:text-[15px] px-3.5 lg:px-7 py-1.5 lg:py-3 rounded-full bg-[#615FFF] shadow-sm lg:shadow-md shadow-[#615FFF] hover:bg-[#625fffd7] duration-300"
          >
            {t("startProject")}
          </Link>

          <div className="md:hidden">
            <Hamburger size={25} color="gray" toggled={isOpen} toggle={setIsOpen} />
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