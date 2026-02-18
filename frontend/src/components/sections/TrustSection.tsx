import { Section } from '@/components/ui/Section'
import { CheckCircle2, Award, Building2 } from 'lucide-react'

export function TrustSection() {
    return (
        <Section className="bg-white">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[var(--deep-navy)] sm:text-4xl">
                    검증된 교육, 확실한 결과
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
                    {/* Left: Certification & Stats */}
                    <div className="space-y-8">
                        <div className="rounded-2xl border border-[var(--light-gray)] bg-[var(--surface-color)] p-8 shadow-sm">
                            <div className="mb-4 flex items-center gap-3">
                                <Award className="h-10 w-10 text-[var(--intel-blue)]" />
                                <h3 className="text-xl font-bold text-[var(--dark-gray)]">
                                    Intel AI Course Certification
                                </h3>
                            </div>
                            <p className="mb-6 text-[var(--medium-gray)]">
                                인텔이 인증하는 공식 교육 과정 수료증을 발급받으세요. 글로벌 기업이 인정하는 AI 역량을 증명할 수 있습니다.
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-[var(--intel-blue)]">
                                <CheckCircle2 className="h-5 w-5" />
                                <span>Official Digital Badge Included</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl bg-blue-50 p-4 text-center">
                                <div className="text-2xl font-bold text-[var(--intel-blue)]">4.9/5.0</div>
                                <div className="text-xs text-[var(--medium-gray)]">수강생 만족도</div>
                            </div>
                            <div className="rounded-xl bg-blue-50 p-4 text-center">
                                <div className="text-2xl font-bold text-[var(--intel-blue)]">90%</div>
                                <div className="text-xs text-[var(--medium-gray)]">수료율</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Instructor & Partners */}
                    <div className="space-y-8">
                        {/* Instructor */}
                        <div className="flex items-start gap-4 rounded-xl border border-[var(--light-gray)] p-6">
                            <div className="h-16 w-16 shrink-0 rounded-full bg-gray-200 overflow-hidden">
                                {/* Placeholder for Instructor Image */}
                                <div className="h-full w-full bg-gray-300 animate-pulse" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--dark-gray)]">
                                    Intel Certified Instructor
                                </h4>
                                <p className="text-sm text-[var(--medium-gray)] mb-2">
                                    현업 10년차 풀스택 개발자 & AI 전문가
                                </p>
                                <p className="text-sm text-gray-500">
                                    &quot;코드 한 줄 못 짜던 비전공자도 6개월 뒤에는 MVP를 출시할 수 있도록 이끌어 드립니다.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Partners */}
                        <div>
                            <h4 className="mb-4 text-sm font-semibold text-[var(--medium-gray)] uppercase tracking-wider">
                                Official Partners
                            </h4>
                            <div className="flex flex-wrap gap-4 items-center opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                <div className="flex items-center gap-2 rounded-lg border px-4 py-2">
                                    <Building2 className="h-5 w-5" />
                                    <span className="font-bold">Intel</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-lg border px-4 py-2">
                                    <Building2 className="h-5 w-5" />
                                    <span className="font-bold">KDT</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-lg border px-4 py-2">
                                    <Building2 className="h-5 w-5" />
                                    <span className="font-bold">Ministry of Labor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
