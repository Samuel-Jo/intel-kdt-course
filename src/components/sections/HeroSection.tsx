'use client'

import { ApplyButton } from '@/components/features/ApplyButton'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = [
    '100% 국비지원 (교육비 0원)',
    '비전공자 환영',
    '실전 MVP 프로젝트 완성',
]

export function HeroSection() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050a14] flex items-center">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#0068b5] opacity-10 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#5a4fcf] opacity-10 blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#00c7fd] opacity-5 blur-[80px]" />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            <Section className="relative z-10 flex flex-col items-center text-center py-32">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0068b5]/40 bg-[#0068b5]/10 px-5 py-2 text-sm font-semibold text-[#00c7fd] backdrop-blur-sm"
                >
                    <Sparkles className="h-4 w-4" />
                    Intel KDT AI Course 2025
                    <span className="ml-1 rounded-full bg-[#00c7fd] px-2 py-0.5 text-xs text-[#050a14] font-bold">모집중</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mb-6 max-w-5xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
                >
                    AI로 창업하는
                    <br />
                    <span className="bg-gradient-to-r from-[#0068b5] via-[#00c7fd] to-[#5a4fcf] bg-clip-text text-transparent">
                        바이브코딩 전문가
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl md:text-2xl leading-relaxed"
                >
                    인텔이 인증하는 <span className="text-white font-semibold">100% 무료 국비지원</span> 교육.<br />
                    비전공자도 6개월 뒤 실제 서비스를 런칭합니다.
                </motion.p>

                {/* Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mb-10 flex flex-wrap justify-center gap-4"
                >
                    {highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-[#00c7fd]" />
                            {item}
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                >
                    <ApplyButton size="lg" className="group text-lg px-8 py-4 bg-gradient-to-r from-[#0068b5] to-[#00c7fd] hover:opacity-90 text-white font-bold rounded-full shadow-lg shadow-[#0068b5]/30">
                        지금 바로 지원하기
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </ApplyButton>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                        커리큘럼 보기
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 grid grid-cols-3 gap-8 sm:gap-16"
                >
                    {[
                        { value: '944h', label: '총 교육 시간' },
                        { value: '0원', label: '교육비 전액 무료' },
                        { value: 'MVP', label: '실전 창업 프로젝트' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-extrabold text-white md:text-4xl">{stat.value}</div>
                            <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </Section>
        </div>
    )
}
