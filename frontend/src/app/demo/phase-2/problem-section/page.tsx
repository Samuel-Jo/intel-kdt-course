import { ProblemSection } from '@/components/sections/ProblemSection'

export default function ProblemSectionDemoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto py-10">
                <h1 className="mb-10 text-2xl font-bold">Problem Section Demo</h1>
                <p className="mb-20">Scroll down to see the animation...</p>

                {/* Spacer to force scrolling */}
                <div className="h-[50vh] bg-gray-200 flex items-center justify-center rounded-lg mb-20">
                    Scroll Down
                </div>

                <ProblemSection />

                {/* Spacer after */}
                <div className="h-[50vh] bg-gray-200 flex items-center justify-center rounded-lg mt-20">
                    Footer Area
                </div>
            </div>
        </div>
    )
}
