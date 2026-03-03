import { ServicesSection } from "@/components/home/services/Grid";
import { QuoteSection } from "@/components/home/services/Quote";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main>
        <ServicesSection />
        <QuoteSection />
      </main>
    </div>
  );
}
