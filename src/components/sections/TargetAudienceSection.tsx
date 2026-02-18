'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Lightbulb, RefreshCw, Code2, CheckCircle2 } from 'lucide-react'

const targets = [
    {
        icon: Lightbulb,
        title: '예비 창업자',
        desc: 'AI 기술로 혁신적인 서비스를 만들어 시장에 출시하고 싶은 창업 도전자',
        details: ['MVP 제작 지원', '사업화 멘토링'],
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'group-hover:border-yellow-400/50',
    },
    {
        icon: RefreshCw,
        title: '비전공자 / 직무전환',
        desc: '코딩 경험이 없어도 걱정 NO. 기초부터 서비스 배포까지 완벽 가이드.',
        details: ['코딩 기초부터 시작', '비전공자 눈높이 교육'],
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'group-hover:border-green-400/50',
    },
    {
        icon: Code2,
        title: 'IT 전공자',
        desc: '기존 개발 실력에 AI 전문성을 더해 차별화된 개발자가 되고 싶은 IT전공자',
        details: ['Deep Dive 기술', '고난이도 프로젝트'],
        color: 'text-[#00c7fd]',
        bg: 'bg-[#00c7fd]/10',
        border: 'group-hover:border-[#00c7fd]/50',
    },
]

export function TargetAudienceSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <Section className="bg-[#050a14] py-24" ref={ref}>
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#0068b5] font-bold tracking-widest uppercase text-sm mb-2 block">
                        Who is this for?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        누가 참여해야 하나요?
                    </h2>
                    <p className="text-gray-400">학력, 전공 무관! 열정만 있다면 누구나 AI 전문가가 될 수 있습니다.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {targets.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            className={`group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:-translate-y-2 ${target.border}`}
                        >
                            <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${target.bg} transition-transform duration-300 group-hover:scale-110`}>
                                <target.icon className={`h-10 w-10 ${target.color}`} />
                            </div>
                            <h3 className={`mb-4 text-2xl font-bold text-white transition-colors ${target.color.replace('text-', 'group-hover:text-')}`}>
                                {target.title}
                            </h3>
                            <p className="mb-8 h-14 text-gray-400 leading-relaxed">
                                {target.desc}
                            </p>
                            <div className="border-t border-white/10 pt-6">
                                <ul className="flex flex-col gap-3 items-center">
                                    {target.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 className={`h-4 w-4 ${target.color}`} />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
