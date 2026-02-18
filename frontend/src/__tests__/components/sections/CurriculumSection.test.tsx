import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CurriculumSection } from '@/components/sections/CurriculumSection'

describe('CurriculumSection Component', () => {
    it('renders the main headline', () => {
        render(<CurriculumSection />)
        expect(screen.getByRole('heading', { level: 2, name: /실전 프로젝트로 완성하는 커리어/i })).toBeInTheDocument()
    })

    it('renders all three curriculum phases', () => {
        render(<CurriculumSection />)
        expect(screen.getByText(/Phase 1/i)).toBeInTheDocument()
        expect(screen.getByText(/Phase 2/i)).toBeInTheDocument()
        expect(screen.getByText(/Phase 3/i)).toBeInTheDocument()
    })

    it('renders specific project titles', () => {
        render(<CurriculumSection />)
        expect(screen.getByText(/나만의 쇼핑몰 구축/i)).toBeInTheDocument()
        expect(screen.getByText(/AI 챗봇 서비스 개발/i)).toBeInTheDocument()
        expect(screen.getByText(/실전창업 MVP 출시/i)).toBeInTheDocument()
    })

    it('uses Section container', () => {
        const { container } = render(<CurriculumSection />)
        const section = container.querySelector('section')
        expect(section).toHaveClass('container')
    })
})
