import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils'

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md' | 'lg'

type ButtonElement = ElementRef<'button'>
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
}

export const Button = forwardRef<ButtonElement, ButtonProps>((props, forwardedRef) => {
  const { variant = 'primary', size = 'md', fullWidth = false, ...butonProps } = props
  return (
    <button
      {...butonProps}
      ref={forwardedRef}
      className={cn(
        'transition-200 inline-flex items-center justify-center font-bold cursor-default',
        {
          'bg-primary text-base-12 rounded-lg hover:bg-primary-hover': variant === 'primary',
          'bg-base-3 text-base-8 rounded-lg': variant === 'secondary',
        },
        {
          'text-xs py-2 px-4 rounded-lg font-medium ': size === 'sm',
          'text-base py-3 px-6 rounded-lg': size === 'md',
          'text-lg py-5 px-10 rounded-xl': size === 'lg',
          'w-full': fullWidth === true,
        },
        props.className,
      )}
    >
      {props.children}
    </button>
  )
})

Button.displayName = 'Button'
