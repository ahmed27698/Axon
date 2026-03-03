import Link from "next/link";
import { Globe, AtSign, Share2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {

  const sections = [
    {
      title: "Solutions",
      links: [
        { text: "Custom Software", href: "#" },
        { text: "Cloud Infrastructure", href: "#" },
        { text: "AI & Data Strategy", href: "#" },
        { text: "DevOps & SRE", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Case Studies", href: "#" },
        { text: "Engineering Blog", href: "#" },
        { text: "Careers", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div >
              <Image src="/logo.png" width={150} height={100} alt="logo" />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-500">
            Operating Globally & Remote-First. High-end software development for
            ambitious enterprises and fast-growing startups.
          </p>

          <div className="flex items-center gap-4 text-gray-500">
            <Globe size={18} className="hover:text-white transition cursor-pointer" />
            <AtSign size={18} className="hover:text-white transition cursor-pointer" />
            <Share2 size={18} className="hover:text-white transition cursor-pointer" />
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-white text-xs tracking-widest uppercase mb-6">
              {section.title}
            </h3>
            <ul className="space-y-4 text-sm">
              {section.links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="hover:text-white duration-300 inline-block transition-transform hover:translate-x-1"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-white text-xs tracking-widest uppercase mb-6">
            Headquarters
          </h3>

          <div className="text-sm space-y-2 text-gray-500">
            <p>123 Tech Innovation Plaza</p>
            <p>Suite 500</p>
            <p>San Francisco, CA 94105</p>
          </div>

          <p className="text-xs text-gray-600 mt-8">
            © 2024 Nexus Dev. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}