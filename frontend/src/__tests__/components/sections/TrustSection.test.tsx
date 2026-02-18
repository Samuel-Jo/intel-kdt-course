import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TrustSection } from '@/components/sections/TrustSection'

describe('TrustSection Component', () => {
    it('renders the main headline', () => {
        render(<TrustSection />)
        expect(screen.getByRole('heading', { level: 2, name: /검증된 교육, 확실한 결과/i })).toBeInTheDocument()
    })

    it('renders the certification badge placeholder or text', () => {
        render(<TrustSection />)
        expect(screen.getByText(/Intel AI Course Certification/i)).toBeInTheDocument()
    })

    it('renders instructor profile information', () => {
        render(<TrustSection />)
        expect(screen.getByText(/Intel Certified Instructor/i)).toBeInTheDocument()
    })

    it('renders partner logos/names', () => {
        render(<TrustSection />)
        expect(screen.getByText(/Ministry of Labor/i)).toBeInTheDocument()
        expect(screen.getByText(/KDT/i)).toBeInTheDocument()
    })

    it('uses Section container', () => {
        const { container } = render(<TrustSection />)
        const section = container.querySelector('section')
        expect(section).toHaveClass('container')
    })
})
