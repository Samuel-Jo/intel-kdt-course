import { ApplyButton } from '@/components/features/ApplyButton'
import { HeroSection } from '@/components/sections/HeroSection'

export default function ApplyFormDemoPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-10 space-y-10">
            <section>
                <h1 className="text-2xl font-bold mb-4">Apply Button Component</h1>
                <ApplyButton>지금 지원하기 (Default)</ApplyButton>
            </section>

            <section>
                <h1 className="text-2xl font-bold mb-4">Hero Section Integration</h1>
                <div className="border rounded-xl overflow-hidden shadow-sm">
                    <HeroSection />
                </div>
            </section>
        </div>
    )
}
