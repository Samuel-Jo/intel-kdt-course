import Link from 'next/link'
import { ApplyButton } from '@/components/features/ApplyButton'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-background">
            {/* Background Gradients (Optional aesthetic touch) */}
            <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-[var(--neon-cyan)] opacity-10 blur-3xl filter" />
            <div className="absolute top-40 -left-20 h-[300px] w-[300px] rounded-full bg-[var(--electric-indigo)] opacity-10 blur-3xl filter" />

            <Section className="relative z-10 flex flex-col items-center text-center">
                {/* Intel Logo / Badge */}
                <div className="mb-6 inline-flex items-center rounded-full border border-[var(--intel-blue)] bg-[var(--light-gray)] px-4 py-1.5 text-sm font-semibold text-[var(--intel-blue)] shadow-sm">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--intel-blue)] animate-pulse" />
                    Intel KDT AI Course
                </div>

                {/* Headline */}
                <h1 className="mb-6 max-w-4xl bg-gradient-to-r from-[var(--intel-blue)] to-[var(--electric-indigo)] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                    AI 융합 솔루션<br className="hidden sm:block" /> 전문가 양성 과정
                </h1>

                {/* Subheadline */}
                <h2 className="mb-8 max-w-2xl text-lg text-[var(--medium-gray)] sm:text-xl md:text-2xl">
                    <span className="font-semibold text-[var(--dark-gray)]">1인 창업가</span>를 위한 실전 교육.<br className="sm:hidden" />
                    바이브 코딩을 넘어 진짜 개발자로 거듭나세요.
                </h2>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <ApplyButton size="lg" className="group text-lg">
                        지금 바로 지원하기
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </ApplyButton>
                    <Button variant="outline" size="lg" className="text-lg">
                        커리큘럼 자세히 보기
                    </Button>
                </div>

                {/* Social Proof / Stats (Optional) */}
                <div className="mt-12 grid grid-cols-3 gap-8 text-center sm:gap-12 md:mt-16">
                    <div>
                        <div className="text-2xl font-bold text-[var(--intel-blue)] md:text-3xl">944</div>
                        <div className="text-sm text-[var(--medium-gray)]">총 교육 시간</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-[var(--intel-blue)] md:text-3xl">100%</div>
                        <div className="text-sm text-[var(--medium-gray)]">교육비 무료</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-[var(--intel-blue)] md:text-3xl">MVP</div>
                        <div className="text-sm text-[var(--medium-gray)]">창업 프로젝트</div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
