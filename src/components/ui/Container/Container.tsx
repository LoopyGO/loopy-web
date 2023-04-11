import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

type AnchorProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>
type CardProps = AnchorProps & {
  children: ReactNode
}

export const Container = (props: CardProps) => {
  const { ...cardProps } = props // aqui
  return (
    <div
      {...cardProps}
      className={twMerge(
        clsx(
          'w-full transition-200 relative flex p-6 gap-4 rounded-lg bg-base-2 border border-base-6',
          props.className,
        ),
      )}
    >
      {props.children}
    </div>
  )
}

Container.displayName = 'Container'
