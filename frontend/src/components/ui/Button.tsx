'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background',
    {
        variants: {
            variant: {
                primary:
                    'bg-primary text-primary-foreground shadow hover:bg-electric-indigo',
                secondary:
                    'bg-transparent text-primary border border-primary hover:bg-surface',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-11 px-8 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-14 rounded-md px-10 text-lg',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends Omit<HTMLMotionProps<'button'>, 'ref' | 'children'>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    isLoading?: boolean
    children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isLoading, children, ...props }, ref) => {
        // If asChild is true, we would use Slot (not installed yet). Skip for now or assume false.
        // Simplifying for this task which didn't ask for Radix Slot.

        return (
            <motion.button
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={props.disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span className="sr-only">Loading...</span>
                    </>
                )}
                {children}
            </motion.button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
