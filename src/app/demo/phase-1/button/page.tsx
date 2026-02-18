import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function ButtonDemoPage() {
    return (
        <div className="container mx-auto py-10 space-y-8">
            <h1 className="text-3xl font-bold mb-6">Button Component Demo</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Variants</h2>
                <div className="flex gap-4 items-center flex-wrap">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="link">Link Button</Button>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Sizes</h2>
                <div className="flex gap-4 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon"><ArrowRight className="h-4 w-4" /></Button>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">States</h2>
                <div className="flex gap-4 items-center">
                    <Button isLoading>Loading</Button>
                    <Button disabled>Disabled</Button>
                    <Button variant="secondary" isLoading>Loading Secondary</Button>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">With Icons</h2>
                <div className="flex gap-4 items-center">
                    <Button>
                        Send Email <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="secondary">
                        <ArrowRight className="mr-2 h-4 w-4" /> Go Back
                    </Button>
                </div>
            </section>
        </div>
    )
}
