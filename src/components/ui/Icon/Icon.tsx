import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { className, ...attr } = props

  const classes = twMerge(
    clsx('w-[1em] h-[1em] inline block align-center text-current leading-4', className),
  )

  return <svg ref={ref} className={classes} {...attr} />
})

Icon.displayName = 'Icon'
