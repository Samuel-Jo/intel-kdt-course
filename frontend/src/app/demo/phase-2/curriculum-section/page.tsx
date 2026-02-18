import { CurriculumSection } from '@/components/sections/CurriculumSection'

export default function CurriculumSectionDemoPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto py-10">
                <h1 className="mb-10 text-2xl font-bold">Curriculum Section Demo</h1>

                {/* Spacer to force scrolling */}
                <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-lg mb-20 text-gray-500">
                    Scroll Down for Animation
                </div>

                <CurriculumSection />

                {/* Spacer after */}
                <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-lg mt-20 text-gray-500">
                    Footer Area
                </div>
            </div>
        </div>
    )
}
