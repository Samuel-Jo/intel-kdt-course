'use client'

import { Section } from '@/components/ui/Section'

export function Footer() {
    return (
        <footer className="bg-[#050a14] border-t border-white/10 py-12 text-center text-gray-500 text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-left">
                        <h3 className="text-white font-bold text-lg mb-2">Intel KDT AI Course</h3>
                        <p>AI 융합 솔루션 전문가 양성 과정</p>
                    </div>
                    <div>
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                        <p className="text-xs mt-1">Authorized by Intel & Ministry of Employment and Labor</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
