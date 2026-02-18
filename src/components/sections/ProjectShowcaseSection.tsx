'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
    {
        title: "AI 마케팅 에이전트 (NLP)",
        engTitle: "Marketing AI Agent",
        desc: "상품 정보를 입력하면 홍보글을 자동 생성하는 NLP 에이전트",
        tech: ["LangChain", "RAG", "Streamlit"],
        gradient: "from-blue-600 to-blue-900",
        path: "/" // Assuming detailed pages don't exist yet, linking to home or a placeholder
    },
    {
        title: "스마트 팜 질병 진단 (CV)",
        engTitle: "Smart Farm AI",
        desc: "드론 촬영 영상 기반 작물 질병 조기 탐지 AI",
        tech: ["CNN", "TensorFlow", "Edge AI"],
        gradient: "from-teal-400 to-teal-700",
        path: "/"
    },
    {
        title: "안전모 착용 감지 CCTV (Capstone)",
        engTitle: "Safety AI",
        desc: "건설 현장 안전 사고 예방을 위한 Intel OpenVINO 솔루션",
        tech: ["Object Detection", "OpenVINO", "FastAPI"],
        gradient: "from-purple-600 to-purple-900",
        path: "/"
    }
]

export function ProjectShowcaseSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <Section className="bg-[#050a14] py-24" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end"
                >
                    <div>
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                            Student <span className="text-[#00c7fd]">Projects</span>
                        </h2>
                        <p className="text-gray-400">선배들이 만든 결과물, 다음은 당신 차례입니다.</p>
                    </div>

                    <a href="#" className="group flex items-center gap-2 text-sm font-bold text-[#00c7fd] transition-colors hover:text-white">
                        더 많은 프로젝트 보기
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <Link href={project.path} key={index} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                className={`relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
                            >
                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex flex-col justify-end bg-black/20 p-8 transition-colors group-hover:bg-black/40">

                                    {/* Background Text Effect */}
                                    <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-5xl font-black uppercase text-white/10 transition-transform duration-500 group-hover:scale-110 md:text-6xl">
                                        {project.engTitle}
                                    </span>

                                    <div className="relative z-10 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                        {/* Tech Stack Tags */}
                                        <div className="mb-3 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                                            {project.tech.map((tech, idx) => (
                                                <span key={idx} className="rounded bg-white/20 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="mb-2 text-2xl font-bold leading-tight text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm font-medium text-white/80">
                                            {project.desc}
                                        </p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    )
}
