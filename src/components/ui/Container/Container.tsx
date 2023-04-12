import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/utils'

type AnchorProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>
type CardProps = AnchorProps & {
  children: ReactNode
}

export const Container = (props: CardProps) => {
  const { ...cardProps } = props // aqui
  return (
    <div
      {...cardProps}
      className={cn(
        'w-full transition-200 relative flex p-6 gap-4 rounded-xl bg-base-2 border border-base-6',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}

Container.displayName = 'Container'
