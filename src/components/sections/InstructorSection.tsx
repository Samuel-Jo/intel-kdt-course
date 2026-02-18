'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { User, Award, Briefcase } from 'lucide-react'

const instructors = [
    {
        name: "홍승표",
        role: "Intel Korea Technical Solutions Specialist",
        highlight: "Cloud & AI Infrastructure Expert",
        desc: "클라우드, AI, 서버 GPU 기반 솔루션 기술 총괄. 인프라 현대화 및 온디바이스 AI 프로젝트 기술 코칭.",
        career: ["Intel RealSense Tech Product Manager", "한화테크윈 AI CCTV 상용화 리드"],
        color: "bg-[#0068b5]"
    },
    {
        name: "윤준보",
        role: "Intel Korea Tech Sales 상무",
        highlight: "AI Platform Advisor",
        desc: "LG그룹 대상 AI·컴퓨팅 기술 지원 총괄. Geti, OpenVINO, oneAPI 등 인텔 AI 플랫폼 기술 자문.",
        career: ["LG CNS 시스템 SW 엔지니어", "Sun Microsystems Tech Sales"],
        color: "bg-[#5a4fcf]"
    },
    {
        name: "김재민",
        role: "AI 정규 과정 메인 강사 (前 Intel Korea 상무)",
        highlight: "IoT & Edge Computing Leader",
        desc: "18년간 Intel 근무, AI/IoT/Edge 기술 전략 담당. 산업 현장 검증 AI 응용 사례 중심 교육.",
        career: ["前 Intel Korea 상무이사", "삼성전자/NCSoft 협력 프로젝트 다수"],
        color: "bg-[#00c7fd]"
    },
    {
        name: "김정욱",
        role: "Global AI Business Expert",
        highlight: "AI Industry Strategy",
        desc: "글로벌 AI 산업 동향 및 실무 적용 사례 피드백. 데이터 기반 의사결정 및 AI 품질/보안 가이드.",
        career: ["前 DELL Technologies 상무", "前 Microsoft 기술영업 부장"],
        color: "bg-pink-500"
    }
]

export function InstructorSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <Section className="bg-[#080d18] py-24" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#0068b5] font-bold tracking-widest uppercase text-sm mb-2 block">
                        World Class Instructors
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        <span className="bg-gradient-to-r from-[#0068b5] to-[#00c7fd] bg-clip-text text-transparent">Intel 전문가</span>가 직접 가르칩니다
                    </h2>
                    <p className="text-gray-400">최고의 현업 전문가들과 함께하는 실무 프로젝트</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
                        >
                            {/* Background accent */}
                            <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-30 ${instructor.color}`} />

                            <div className="mb-6 flex items-start justify-between">
                                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-lg ${instructor.color}`}>
                                    {instructor.name[0]}
                                </div>
                                <Award className="h-6 w-6 text-yellow-500 opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>

                            <div className="mb-4">
                                <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-[#00c7fd]">
                                    {instructor.name}
                                </h3>
                                <p className="mb-2 text-xs font-bold uppercase tracking-tight text-[#0068b5]">
                                    {instructor.highlight}
                                </p>
                                <p className="text-sm font-medium text-gray-400">
                                    {instructor.role}
                                </p>
                            </div>

                            <div className="mb-6 flex-grow">
                                <p className="line-clamp-3 text-sm leading-relaxed text-gray-500 transition-all group-hover:line-clamp-none group-hover:text-gray-300">
                                    {instructor.desc}
                                </p>
                            </div>

                            <div className="mt-auto border-t border-white/10 pt-4">
                                <ul className="space-y-2">
                                    {instructor.career.map((c, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                                            <Briefcase className="h-3 w-3 shrink-0 text-gray-600" />
                                            {c}
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
