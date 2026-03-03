import MissionAndExpertise from "@/components/home/missionSection/missionAndExpertise";
import { ServicesSection } from "@/components/home/services/Grid";
import { QuoteSection } from "@/components/home/services/Quote";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main>
        <MissionAndExpertise/>
        <ServicesSection />
        <QuoteSection />
      </main>
    </div>
  );
}
