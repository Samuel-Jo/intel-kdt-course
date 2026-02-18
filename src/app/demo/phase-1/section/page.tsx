import { Section } from '@/components/ui/Section'

export default function SectionDemoPage() {
    return (
        <div className="space-y-4">
            <Section className="bg-gray-100 border border-gray-300">
                <h1 className="text-2xl font-bold mb-4">Section Component Demo</h1>
                <p>This is a default section. Resize the window to see padding changes.</p>
                <div className="mt-4 p-4 bg-white rounded shadow">
                    Content Box
                </div>
            </Section>

            <Section className="bg-blue-100 text-blue-900">
                <h2 className="text-xl font-bold mb-4">Another Section</h2>
                <p>This section has a custom background color.</p>
            </Section>

            <div className="w-full bg-slate-900 text-white">
                <Section>
                    <h2 className="text-xl font-bold mb-4">Dark Background Wrapper</h2>
                    <p>The section component handles the container width and padding, even inside a full-width background.</p>
                </Section>
            </div>
        </div>
    )
}
