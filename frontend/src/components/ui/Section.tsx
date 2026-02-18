import * as React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    container && 'container mx-auto px-4 py-8 md:px-10 md:py-16 lg:px-20 lg:py-20', // Fixing lg:py-24 to 20 based on test or design system check?
                    // Let's stick to the test expectation: lg:px-20 lg:py-24
                    container && 'lg:py-24',
                    className
                )}
                {...props}
            >
                {children}
            </section>
        )
    }
)
Section.displayName = 'Section'

export { Section }
