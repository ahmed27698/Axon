import { useTranslations } from "next-intl";
import LanguageSwitching from "./languageSwitching";

export default function MissionAndExpertise() {
    const t = useTranslations('HomePage');
  return (
    <section className="flex flex-col gap-7 ">
      <LanguageSwitching/>
        <p className="text-[#615FFF]">About SoftSolv</p>
        <h2>Our Mission & Expertise</h2>
        <p className="text-[18px] text-[#90A1B9] lg:w-6/12">We are a team of passionate engineers and designers dedicated to building scalable, high-performance software that drives business growth.</p>
        
        
    </section>
  )
}
