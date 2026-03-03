import Link from "next/link";
import { Globe, AtSign, Share2 } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "../../../public/logo.png"

export default function Footer() {
  const t = useTranslations("Footer");

  const sections = [
    {
      title: t("solutions"),
      links: [
        { text: t("customSoftware"), href: "#" },
        { text: t("cloudInfrastructure"), href: "#" },
        { text: t("aiStrategy"), href: "#" },
        { text: t("devops"), href: "#" },
      ],
    },
    {
      title: t("company"),
      links: [
        { text: t("about"), href: "#" },
        { text: t("caseStudies"), href: "#" },
        { text: t("blog"), href: "#" },
        { text: t("careers"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Image src={logo} width={35} height={35} alt="logo" />
            <span className="text-white font-semibold text-2xl">AxonDev</span>
          </div>

          <p className="text-sm leading-relaxed text-gray-500">
            {t("description")}
          </p>

          <div className="flex items-center gap-4 text-gray-500">
            <Globe size={18} className="hover:text-white transition cursor-pointer" />
            <AtSign size={18} className="hover:text-white transition cursor-pointer" />
            <Share2 size={18} className="hover:text-white transition cursor-pointer" />
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">
              {section.title}
            </h3>
            <ul className="space-y-4 text-sm">
              {section.links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="hover:text-white font-sans duration-300 inline-block transition-transform hover:translate-x-1.5"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">
            {t("headquarters")}
          </h3>

          <div className="text-sm space-y-2 text-gray-500">
            <p>123 Tech Innovation Plaza</p>
            <p>Suite 500</p>
            <p>San Francisco, CA 94105</p>
          </div>

          <p className="text-xs text-gray-600 mt-8">
            {t("copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
}