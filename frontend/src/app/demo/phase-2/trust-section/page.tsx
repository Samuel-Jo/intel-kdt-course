import { TrustSection } from '@/components/sections/TrustSection'

export default function TrustSectionDemoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto py-10">
                <h1 className="mb-10 text-2xl font-bold">Trust Section Demo</h1>

                <div className="bg-white p-4 rounded-lg shadow-sm mb-10">
                    <p className="text-gray-500 mb-2">Note: Images are placeholders (gray circles/boxes). Icons should be visible.</p>
                </div>

                <TrustSection />
            </div>
        </div>
    )
}
