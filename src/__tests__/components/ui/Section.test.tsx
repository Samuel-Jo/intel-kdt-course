import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Section } from '@/components/ui/Section'

describe('Section Component', () => {
    it('renders correctly with default props', () => {
        render(<Section>Content</Section>)
        const section = screen.getByText('Content').closest('section')
        expect(section).toBeInTheDocument()
        expect(section).toHaveClass('container', 'mx-auto', 'px-4', 'py-8')
    })

    it('renders with custom className', () => {
        render(<Section className="bg-gray-100 custom-class">Content</Section>)
        const section = screen.getByText('Content').closest('section')
        expect(section).toHaveClass('bg-gray-100', 'custom-class')
    })

    it('renders children correctly', () => {
        render(
            <Section>
                <div data-testid="child">Child Element</div>
            </Section>
        )
        expect(screen.getByTestId('child')).toBeInTheDocument()
    })

    it('applies responsive padding classes', () => {
        render(<Section>Responsive Test</Section>)
        const section = screen.getByText('Responsive Test').closest('section')
        // Mobile: px-4 py-8
        expect(section).toHaveClass('px-4', 'py-8')
        // Tablet: md:px-10 md:py-16
        expect(section).toHaveClass('md:px-10', 'md:py-16')
        // Desktop: lg:px-20 lg:py-24
        expect(section).toHaveClass('lg:px-20', 'lg:py-24')
    })
})
