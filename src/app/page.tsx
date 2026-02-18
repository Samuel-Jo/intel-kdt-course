import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { CurriculumSection } from '@/components/sections/CurriculumSection'
import { TrustSection } from '@/components/sections/TrustSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <CurriculumSection />
      <TrustSection />
    </main>
  )
}
