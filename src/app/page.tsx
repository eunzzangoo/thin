import HeroSection from '@/components/home/HeroSection';
import ServiceSection from '@/components/home/ServiceSection';
import ProjectSection from '@/components/home/ProjectSection';
import StatsSection from '@/components/home/StatsSection';
import ContactSection from '@/components/home/ContactSection';

export function generateStaticParams() {
  return [
    { path: '/' },
    { path: '/404' },
    { path: '/_not-found' },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <StatsSection />
      <ContactSection />
    </>
  );
}
 