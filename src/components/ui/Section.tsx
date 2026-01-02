import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: 'default' | 'dark' | 'light'
}

export default function Section({ 
  children, 
  className, 
  id,
  variant = 'default' 
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'section',
        {
          'bg-white': variant === 'default',
          'bg-brand-dark text-white': variant === 'dark',
          'bg-brand-light': variant === 'light',
        },
        className
      )}
    >
      {children}
    </section>
  )
}
