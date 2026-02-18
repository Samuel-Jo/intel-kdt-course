import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProblemSection } from '@/components/sections/ProblemSection'

describe('ProblemSection Component', () => {
    it('renders the main headline', () => {
        render(<ProblemSection />)
        expect(screen.getByRole('heading', { level: 2, name: /화려한 AI 코딩 뒤에 숨겨진 함정/i })).toBeInTheDocument()
    })

    it('renders three problem cards', () => {
        render(<ProblemSection />)
        const cards = screen.getAllByRole('article') // Assuming cards use <article>
        expect(cards).toHaveLength(3)
    })

    it('renders correct card titles', () => {
        render(<ProblemSection />)
        expect(screen.getByText(/겉핥기식 코드/i)).toBeInTheDocument()
        expect(screen.getByText(/유지보수 불가/i)).toBeInTheDocument()
        expect(screen.getByText(/커리어 정체/i)).toBeInTheDocument()
    })

    it('uses Section container', () => {
        const { container } = render(<ProblemSection />)
        const section = container.querySelector('section')
        expect(section).toHaveClass('container')
    })
})
