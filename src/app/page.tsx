import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { CurriculumSection } from '@/components/sections/CurriculumSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { CountdownBar } from '@/components/features/CountdownBar'
import { TargetAudienceSection } from '@/components/sections/TargetAudienceSection'
import { InstructorSection } from '@/components/sections/InstructorSection'
import { ProjectShowcaseSection } from '@/components/sections/ProjectShowcaseSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="bg-[#050a14] min-h-screen">
      <CountdownBar />
      <HeroSection />
      <TargetAudienceSection />
      <ProblemSection />
      <CurriculumSection />
      <ProjectShowcaseSection />
      <InstructorSection />
      <TrustSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
