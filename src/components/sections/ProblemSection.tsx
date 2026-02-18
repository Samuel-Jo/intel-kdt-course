'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { AlertTriangle, Lock, TrendingDown } from 'lucide-react'

const problems = [
    {
        icon: AlertTriangle,
        title: '겉핥기식 코드',
        description: '복사/붙여넣기에 의존하면 문제 해결 능력이 사라지고, 조금만 응용해도 막히게 됩니다.',
    },
    {
        icon: Lock,
        title: '유지보수 불가',
        description: 'AI가 작성한 코드의 원리를 모르면 버그가 발생했을 때 손을 쓸 수 없습니다.',
    },
    {
        icon: TrendingDown,
        title: '커리어 정체',
        description: '단순히 AI 툴만 사용하는 사람은 대체되기 쉽습니다. 진짜 개발 실력이 필요합니다.',
    },
]

export function ProblemSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <Section className="bg-white" ref={ref}>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-[var(--deep-navy)] sm:text-4xl">
                    화려한 AI 코딩 뒤에 숨겨진 함정
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {problems.map((problem, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 flex justify-center text-[var(--neon-pink)]">
                                <problem.icon className="h-12 w-12" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-[var(--dark-gray)]">
                                {problem.title}
                            </h3>
                            <p className="text-[var(--medium-gray)]">
                                {problem.description}
                            </p>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-[var(--neon-pink)] opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl pointer-events-none" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </Section>
    )
}
