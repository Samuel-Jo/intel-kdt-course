'use client'

import Link from 'next/link'
import { buttonVariants, ButtonProps } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import * as React from 'react'

interface ApplyButtonProps extends ButtonProps {
    href?: string
}

const MotionLink = motion.create(Link)

export const ApplyButton = React.forwardRef<HTMLAnchorElement, ApplyButtonProps>(
    ({ className, variant, size, href = siteConfig.links.applyGoogleForm, children, ...props }, ref) => {
        return (
            <MotionLink
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant, size, className }))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                ref={ref}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...props as any} // Framer motion types might mismatch slightly with Next.js Link
            >
                {children}
            </MotionLink>
        )
    }
)
ApplyButton.displayName = 'ApplyButton'
