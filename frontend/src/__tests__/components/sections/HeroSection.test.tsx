import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from '@/components/sections/HeroSection'

describe('HeroSection Component', () => {
    it('renders the main headline', () => {
        render(<HeroSection />)
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/AI 융합 솔루션/i)
    })

    it('renders the subheadline', () => {
        render(<HeroSection />)
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/1인 창업가/i)
    })

    it('renders the CTA button', () => {
        render(<HeroSection />)
        // ApplyButton renders an anchor tag, so we look for role="link"
        const ctaButton = screen.getByRole('link', { name: /지금 바로 지원하기/i })
        expect(ctaButton).toBeInTheDocument()
    })

    it('uses Section container', () => {
        const { container } = render(<HeroSection />)
        const section = container.querySelector('section')
        // Should inherit container classes from Section component
        expect(section).toHaveClass('container')
    })
})
