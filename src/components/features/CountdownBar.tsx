'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlarmClock, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CountdownBar() {
    const [isVisible, setIsVisible] = useState(true)
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    // Set deadline to 2026-03-30 as per original site
    const deadline = new Date('2026-03-30T00:00:00')

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            const difference = deadline.getTime() - now.getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            } else {
                clearInterval(timer)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!isVisible) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none"
            >
                <div className="bg-[#080d18]/90 backdrop-blur-lg border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-4xl w-full pointer-events-auto relative">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute -top-2 -right-2 bg-white/10 rounded-full p-1 hover:bg-white/20 transition-colors"
                    >
                        <X className="h-4 w-4 text-white" />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2 text-white font-bold">
                            <AlarmClock className="h-5 w-5 text-[#00c7fd] animate-pulse" />
                            <span>교육 지원 마감까지</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="md:hidden text-white font-bold text-sm flex items-center gap-1 mr-2">
                            <AlarmClock className="h-4 w-4 text-[#00c7fd]" />
                            마감까지
                        </span>
                        {[
                            { value: timeLeft.days, label: '일' },
                            { value: timeLeft.hours, label: '시간' },
                            { value: timeLeft.minutes, label: '분' },
                            { value: timeLeft.seconds, label: '초' },
                        ].map((time, i) => (
                            <div key={i} className="flex items-center gap-1">
                                <div className="bg-white/10 text-white font-mono font-bold text-lg py-1 px-2 rounded-lg min-w-[40px] text-center border border-white/5">
                                    {String(time.value).padStart(2, '0')}
                                </div>
                                <span className="text-xs font-medium text-gray-400">{time.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full md:w-auto ml-auto">
                        <Button
                            size="lg"
                            className="w-full md:w-auto bg-gradient-to-r from-[#0068b5] to-[#00c7fd] text-white font-bold hover:shadow-[0_0_20px_rgba(0,199,253,0.3)] border-none"
                        >
                            지원하기
                        </Button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
