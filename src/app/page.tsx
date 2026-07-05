import Image from "next/image";
import PortfolioHero from "@/components/custom/sections/heroSection";
import WorkSection from "@/components/custom/sections/worksSection";
import ProjectSection from "@/components/custom/sections/projectsSection";
import TechnologiesSection from "@/components/custom/sections/technologiesSection";
import ContactSection from "@/components/custom/sections/contactSection";

export default function Home() {
  return (
    <main className="w-full">
      <PortfolioHero />
      <WorkSection />
      <ProjectSection />
      <TechnologiesSection />
      <ContactSection />
    </main>
  );
}
