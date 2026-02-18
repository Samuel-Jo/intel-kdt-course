import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ShoppingBag, MessageSquare, Rocket } from 'lucide-react'

const curriculumPhases = [
    {
        phase: 'Phase 1',
        title: '나만의 쇼핑몰 구축',
        description: 'Next.js 14와 Supabase를 활용하여 풀스택 커머스 플랫폼을 처음부터 끝까지 구축합니다.',
        icon: ShoppingBag,
        tags: ['Next.js', 'Supabase', 'Tailwind CSS'],
    },
    {
        phase: 'Phase 2',
        title: 'AI 챗봇 서비스 개발',
        description: 'OpenAI API와 RAG 기술을 접목하여 내 데이터로 대화하는 지능형 챗봇을 구현합니다.',
        icon: MessageSquare,
        tags: ['OpenAI API', 'RAG', 'Vector DB'],
    },
    {
        phase: 'Phase 3',
        title: '실전창업 MVP 출시',
        description: '기획부터 배포까지, 실제 고객이 사용할 수 있는 수준의 MVP 서비스를 완성하고 런칭합니다.',
        icon: Rocket,
        tags: ['Deployment', 'Analytics', 'Marketing'],
    },
]

export function CurriculumSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <Section className="bg-[var(--light-gray)]" ref={ref}>
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-[var(--deep-navy)] sm:text-4xl">
                    실전 프로젝트로 완성하는 커리어
                </h2>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-[var(--medium-gray)] opacity-30 md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {curriculumPhases.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col gap-8 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    } items-center`}
                            >
                                {/* Image/Icon Area */}
                                <div className="flex-1 text-center md:text-right">
                                    <div className={`mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-lg md:mx-0 ${index % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                        <item.icon className="h-16 w-16 text-[var(--electric-indigo)]" />
                                    </div>
                                </div>

                                {/* Center Badge */}
                                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--intel-blue)] text-white shadow-md">
                                    <span className="font-bold">{index + 1}</span>
                                </div>

                                {/* Content Area */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-block rounded-full bg-[var(--neon-cyan)] px-3 py-1 text-xs font-semibold text-[var(--deep-navy)] mb-2">
                                        {item.phase}
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-[var(--dark-gray)]">
                                        {item.title}
                                    </h3>
                                    <p className="mb-4 text-[var(--medium-gray)]">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="text-sm font-medium text-[var(--intel-blue)] bg-blue-50 px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
