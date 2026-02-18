'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { ApplyButton } from '@/components/features/ApplyButton'

const faqs = [
    { q: "코딩을 전혀 모르는 비전공자도 가능한가요?", a: "네! 파이썬 기초부터 차근차근 다룹니다. 열정만 가져오세요. 1-2주차에 기초 문법과 AI 기본기를 확실하게 잡아드립니다." },
    { q: "노트북 사양이 좋아야 하나요?", a: "기본적인 노트북이면 충분합니다. 무거운 학습은 클라우드 환경이나 제공되는 고성능 서버를 활용할 예정이니 걱정 마세요. 그리고 개인 노트북이 없으시면 대여해 드립니다." },
    { q: "수료하면 정말 취업이 되나요?", a: "지난 3기 수료생의 85%가 AI 관련 직무로 취업에 성공했습니다. 이력서 컨설팅과 모의 면접도 지원해 드립니다." },
    { q: "창업(Solopreneur)을 준비 중인데 도움이 될까요?", a: "물론입니다! 이 과정은 단순 이론이 아니라 '나만의 AI 서비스'를 밑바닥부터 구현하는 실전형 과정입니다. 1인 창업에 필요한 기획부터 개발, 배포까지 전 과정을 경험할 수 있습니다." },
    { q: "수강료는 얼마인가요?", a: "본 과정은 전액 국비 지원 무료 교육입니다. 오히려 매달 소정의 훈련 장려금까지 받으실 수 있습니다!" },
]

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-semibold text-lg text-white">{question}</span>
                {isOpen ? <Minus className="text-[#00c7fd]" /> : <Plus className="text-gray-500" />}
            </button>
            {isOpen && (
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                    {answer}
                </div>
            )}
        </div>
    )
}

export function FAQSection() {
    return (
        <Section className="bg-[#080d18] py-24">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
                    자주 묻는 <span className="text-[#00c7fd]">질문</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <AccordionItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>

                {/* Call to Action in Footer */}
                <div className="mt-20 text-center bg-gradient-to-br from-[#0068b5] to-[#5a4fcf] rounded-3xl p-10 md:p-16 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">지금이 가장 빠를 때입니다.</h2>
                        <p className="text-blue-100 mb-8 text-lg">고민하는 사이 정원은 마감됩니다. 당신의 가능성을 Intel과 함께 증명하세요.</p>
                        <ApplyButton size="lg" className="bg-white text-[#0068b5] hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg border-none">
                            지금 바로 지원하기
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </ApplyButton>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                </div>
            </div>
        </Section>
    )
}
