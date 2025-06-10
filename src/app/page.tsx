import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServiceSection from '@/components/home/ServiceSection';
import StatsSection from '@/components/home/StatsSection';
import ProjectSection from '@/components/home/ProjectSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServiceSection />
        <StatsSection />
        <ProjectSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
