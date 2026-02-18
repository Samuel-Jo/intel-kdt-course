import { describe, it, expect } from 'vitest'
import { metadata } from '@/app/layout'
import type { Metadata } from 'next'

describe('SEO Metadata', () => {
    it('has multiple matching titles', () => {
        // metadata.title can be a string or a template object
        const title = metadata.title as { default: string; template: string }
        expect(title).toBeDefined()
        // We expect a specific title format for the landing page
        expect(title.default).toContain('Intel KDT AI Course')
        expect(title.default).toContain('AI 융합 솔루션 전문가 양성 과정')
    })

    it('has the correct description', () => {
        expect(metadata.description).toContain('인텔이 인증하는 100% 무료 국비지원 교육')
    })

    it('has Open Graph configuration', () => {
        expect(metadata.openGraph).toBeDefined()
        expect(metadata.openGraph?.type).toBe('website')
        expect(metadata.openGraph?.locale).toBe('ko_KR')
    })
})
