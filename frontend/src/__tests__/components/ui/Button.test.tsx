import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from '@/components/ui/Button'

describe('Button Component', () => {
    it('renders correctly with default props', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByRole('button', { name: /click me/i })
        expect(button).toBeDefined()
    })

    it('handles click events', () => {
        const handleClick = vi.fn()
        render(<Button onClick={handleClick}>Click me</Button>)
        fireEvent.click(screen.getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('renders primary variant correctly', () => {
        render(<Button variant="primary">Primary</Button>)
        const button = screen.getByRole('button')
        // Tailwind classes check (partial)
        expect(button.className).toContain('bg-primary')
    })

    it('renders secondary variant correctly', () => {
        render(<Button variant="secondary">Secondary</Button>)
        const button = screen.getByRole('button')
        expect(button.className).toContain('border-primary')
    })

    it('renders outline variant correctly', () => {
        render(<Button variant="outline">Outline</Button>)
        const button = screen.getByRole('button')
        expect(button.className).toContain('border')
    })

    it('shows loading state', () => {
        render(<Button isLoading>Login</Button>)
        expect(screen.getByRole('button')).toBeDisabled()
        expect(screen.getByText(/loading/i)).toBeDefined() // Or check for spinner
    })

    it('handles disabled state', () => {
        const handleClick = vi.fn()
        render(<Button disabled onClick={handleClick}>Disabled</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
        fireEvent.click(button)
        expect(handleClick).not.toHaveBeenCalled()
    })
})
