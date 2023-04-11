import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Progress } from '../Progress'

type Variant = 'unlocked' | 'locked'
type Size = 'sm' | 'md' | 'lg'

type AnchorProps = Omit<ComponentPropsWithoutRef<'a'>, 'children'>
type CardProps = AnchorProps & {
  status?: Variant
  size?: Size
  href: string
  title: string
  description: string
  progress: number
}

export const Card = (props: CardProps) => {
  const { size = 'md', status = 'unlocked', progress, ...cardProps } = props // aqui
  return (
    <Link
      {...cardProps}
      className={twMerge(
        clsx(
          'w-full transition-200 relative flex flex-col items-start justify-between gap-4',
          {
            'py-4 px-6 rounded-lg': size === 'sm',
            'py-6 px-6 rounded-lg': size === 'md',
          },
          {
            'bg-base-6 hover:bg-base-7 hover:-translate-y-1': status === 'unlocked',
            'bg-base-2 cursor-default': status === 'locked',
          },
          props.className,
        ),
      )}
    >
      <div className="flex flex-col items-start justify-center">
        <h1
          className={twMerge(
            clsx(
              'font-bold text-base-12',
              {
                'text-base': size === 'sm',
                'text-lg': size === 'md',
              },
              {
                'text-base-12': status === 'unlocked',
                'text-base-5': status === 'locked',
              },
              props.className,
            ),
          )}
        >
          {props.title}
        </h1>
        <p
          className={twMerge(
            clsx(
              'line-clamp-2',
              {
                'text-sm': size === 'sm',
                'text-base': size === 'md',
              },
              {
                'text-base-11': status === 'unlocked',
                'text-base-5': status === 'locked',
              },
              props.className,
            ),
          )}
        >
          {props.description}
        </p>
      </div>
      {status === 'unlocked' && <Progress progress={progress} />}
      {status === 'locked' && (
        <LockClosedIcon className="w-6 h-6 text-base-4 absolute top-0 right-0 m-4" />
      )}
    </Link>
  )
}

Card.displayName = 'Button'
