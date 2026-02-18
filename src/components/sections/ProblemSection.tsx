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
        color: 'from-orange-500/20 to-red-500/20',
        border: 'border-orange-500/30',
        iconColor: 'text-orange-400',
    },
    {
        icon: Lock,
        title: '유지보수 불가',
        description: 'AI가 작성한 코드의 원리를 모르면 버그가 발생했을 때 손을 쓸 수 없습니다.',
        color: 'from-red-500/20 to-pink-500/20',
        border: 'border-red-500/30',
        iconColor: 'text-red-400',
    },
    {
        icon: TrendingDown,
        title: '커리어 정체',
        description: '단순히 AI 툴만 사용하는 사람은 대체되기 쉽습니다. 진짜 개발 실력이 필요합니다.',
        color: 'from-pink-500/20 to-purple-500/20',
        border: 'border-pink-500/30',
        iconColor: 'text-pink-400',
    },
]

export function ProblemSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <Section className="bg-[#080d18] py-24 sm:py-32" ref={ref}>
            <div className="mx-auto max-w-5xl">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-[#00c7fd]"
                >
                    Problem
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
                >
                    화려한 AI 코딩 뒤에 숨겨진 함정
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16 text-center text-lg text-gray-400"
                >
                    바이브코딩만으로는 부족합니다. 진짜 실력이 필요한 이유가 있습니다.
                </motion.p>

                <div className="grid gap-6 md:grid-cols-3">
                    {problems.map((problem, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className={`group relative overflow-hidden rounded-2xl border ${problem.border} bg-gradient-to-br ${problem.color} p-8 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-2xl`}
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />

                            <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ${problem.iconColor}`}>
                                <problem.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">
                                {problem.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-12 rounded-2xl border border-[#0068b5]/30 bg-[#0068b5]/10 p-6 text-center"
                >
                    <p className="text-lg font-semibold text-white">
                        이 과정은 <span className="text-[#00c7fd]">바이브코딩의 한계를 넘어</span>, 진짜 개발자로 성장하는 길을 제시합니다.
                    </p>
                </motion.div>
            </div>
        </Section>
    )
}
