import { Section } from '@/components/ui/Section'
import { CheckCircle2, Award, Star } from 'lucide-react'
import { ApplyButton } from '@/components/features/ApplyButton'
import { ArrowRight } from 'lucide-react'

const benefits = [
    '인텔 공식 수료증 발급',
    '100% 국비지원 (교육비 0원)',
    '비전공자 환영',
    '실전 MVP 프로젝트 완성',
    '취업/창업 멘토링 제공',
    '수강 후 커뮤니티 평생 지원',
]

const stats = [
    { value: '4.9', unit: '/5.0', label: '수강생 만족도' },
    { value: '90', unit: '%', label: '과정 수료율' },
    { value: '6', unit: '개월', label: '집중 교육 기간' },
    { value: '3', unit: '개', label: '실전 프로젝트' },
]

export function TrustSection() {
    return (
        <Section className="bg-[#080d18] py-24 sm:py-32">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-[#00c7fd]">
                    Why Us
                </div>
                <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                    검증된 교육, 확실한 결과
                </h2>
                <p className="mb-16 text-center text-lg text-gray-400">
                    인텔이 보증하는 커리큘럼으로 진짜 실력을 키우세요.
                </p>

                {/* Stats */}
                <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                            <div className="flex items-end justify-center gap-1">
                                <span className="text-4xl font-black text-white">{stat.value}</span>
                                <span className="mb-1 text-lg font-bold text-[#00c7fd]">{stat.unit}</span>
                            </div>
                            <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main content grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Left: Certification */}
                    <div className="rounded-2xl border border-[#0068b5]/30 bg-gradient-to-br from-[#0068b5]/10 to-[#00c7fd]/5 p-8 backdrop-blur-sm">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0068b5]/20 text-[#00c7fd]">
                                <Award className="h-7 w-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Intel AI Certification</h3>
                                <p className="text-sm text-gray-400">공식 수료증 발급</p>
                            </div>
                        </div>
                        <p className="mb-6 text-gray-400 leading-relaxed">
                            인텔이 인증하는 공식 교육 과정 수료증을 발급받으세요. 글로벌 기업이 인정하는 AI 역량을 증명할 수 있습니다.
                        </p>
                        <div className="space-y-3">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00c7fd]" />
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Testimonial + CTA */}
                    <div className="flex flex-col gap-6">
                        {/* Testimonial */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <div className="mb-4 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="mb-4 text-gray-300 leading-relaxed italic">
                                &ldquo;코드 한 줄도 못 짜던 제가 6개월 만에 실제 서비스를 런칭했습니다. 이 과정이 없었다면 불가능했을 일입니다.&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0068b5] to-[#00c7fd] text-sm font-bold text-white">
                                    김
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">김○○ 수강생</div>
                                    <div className="text-xs text-gray-500">비전공자 → 스타트업 창업</div>
                                </div>
                            </div>
                        </div>

                        {/* Partners */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Official Partners</h4>
                            <div className="flex flex-wrap gap-3">
                                {['Intel', 'KDT', '고용노동부'].map((partner, i) => (
                                    <div key={i} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-gray-300">
                                        {partner}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="rounded-2xl bg-gradient-to-r from-[#0068b5] to-[#5a4fcf] p-8 text-center">
                            <h3 className="mb-2 text-xl font-bold text-white">지금 바로 시작하세요</h3>
                            <p className="mb-6 text-sm text-blue-200">선착순 마감 · 교육비 전액 무료</p>
                            <ApplyButton size="lg" className="w-full justify-center bg-white text-[#0068b5] hover:bg-blue-50 font-bold rounded-xl">
                                무료 지원하기
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </ApplyButton>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
