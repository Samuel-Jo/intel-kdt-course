'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ShoppingBag, MessageSquare, Rocket, ArrowRight } from 'lucide-react'

const curriculumPhases = [
    {
        phase: 'Phase 1',
        duration: '1~2개월',
        title: '나만의 쇼핑몰 구축',
        description: 'Next.js 14와 Supabase를 활용하여 풀스택 커머스 플랫폼을 처음부터 끝까지 구축합니다. 실제 결제 시스템까지 연동합니다.',
        icon: ShoppingBag,
        tags: ['Next.js 14', 'Supabase', 'Tailwind CSS', 'Stripe'],
        gradient: 'from-blue-600 to-cyan-500',
        number: '01',
    },
    {
        phase: 'Phase 2',
        duration: '3~4개월',
        title: 'AI 챗봇 서비스 개발',
        description: 'OpenAI API와 RAG 기술을 접목하여 내 데이터로 대화하는 지능형 챗봇을 구현합니다. 벡터 DB와 임베딩을 직접 다룹니다.',
        icon: MessageSquare,
        tags: ['OpenAI API', 'RAG', 'Vector DB', 'LangChain'],
        gradient: 'from-purple-600 to-pink-500',
        number: '02',
    },
    {
        phase: 'Phase 3',
        duration: '5~6개월',
        title: '실전창업 MVP 출시',
        description: '기획부터 배포까지, 실제 고객이 사용할 수 있는 수준의 MVP 서비스를 완성하고 런칭합니다. 마케팅 전략까지 함께 배웁니다.',
        icon: Rocket,
        tags: ['Vercel', 'Analytics', 'SEO', 'Growth Hacking'],
        gradient: 'from-orange-500 to-red-500',
        number: '03',
    },
]

export function CurriculumSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <Section className="bg-[#050a14] py-24 sm:py-32" ref={ref}>
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-[#00c7fd]"
                >
                    Curriculum
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
                >
                    실전 프로젝트로 완성하는 커리어
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16 text-center text-lg text-gray-400"
                >
                    6개월 동안 3개의 실전 프로젝트를 완성합니다.
                </motion.p>

                {/* Cards */}
                <div className="space-y-6">
                    {curriculumPhases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8"
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                                {/* Number + Icon */}
                                <div className="flex items-center gap-4 md:flex-col md:items-center md:w-24 md:shrink-0">
                                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                                        <item.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="text-4xl font-black text-white/10 md:text-5xl">{item.number}</div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="mb-2 flex flex-wrap items-center gap-3">
                                        <span className={`rounded-full bg-gradient-to-r ${item.gradient} px-3 py-1 text-xs font-bold text-white`}>
                                            {item.phase}
                                        </span>
                                        <span className="text-sm text-gray-500">{item.duration}</span>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="mb-4 text-gray-400 leading-relaxed">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <ArrowRight className="hidden h-6 w-6 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-white md:block" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
