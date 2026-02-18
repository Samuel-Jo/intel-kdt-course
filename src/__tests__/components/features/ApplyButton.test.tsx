import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ApplyButton } from '@/components/features/ApplyButton'
import { siteConfig } from '@/config/site'

describe('ApplyButton Component', () => {
    it('renders with correct text', () => {
        render(<ApplyButton>지원하기</ApplyButton>)
        expect(screen.getByRole('link', { name: /지원하기/i })).toBeInTheDocument()
    })

    it('links to the Google Form URL', () => {
        render(<ApplyButton>지원하기</ApplyButton>)
        const link = screen.getByRole('link', { name: /지원하기/i })
        expect(link).toHaveAttribute('href', siteConfig.links.applyGoogleForm)
    })

    it('opens in a new tab', () => {
        render(<ApplyButton>지원하기</ApplyButton>)
        const link = screen.getByRole('link', { name: /지원하기/i })
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('passes generic Button props', () => {
        render(<ApplyButton variant="outline">지원하기</ApplyButton>)
        const link = screen.getByRole('link', { name: /지원하기/i })
        expect(link).toHaveClass('border') // Check for outline variant class part
    })
})
