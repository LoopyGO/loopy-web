'use client'
import React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

type ProgressProps = {
  className?: string
  indicatorClassName?: string
  progress: number
}

export const Progress = ({ progress, className, indicatorClassName }: ProgressProps) => {
  return (
    <div className="flex w-full gap-2 items-center h-4 justify-start relative">
      <ProgressPrimitive.Root
        className={twMerge(
          clsx('relative overflow-hidden bg-base-4 rounded-full w-full h-2', className),
        )}
        style={{
          transform: 'translateZ(0)',
        }}
        value={progress}
      >
        <ProgressPrimitive.Indicator
          className={twMerge(
            clsx(
              'bg-primary w-full h-full transition-200 data-[value="100"]:bg-primary data-[value="0"]:bg-transparent',
              indicatorClassName,
            ),
          )}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressPrimitive.Root>
      {progress === 100 ? (
        <CheckCircleIcon className="w-6 h-6 text-primary" />
      ) : (
        <p className="text-sm font-bold text-base-12 leading-none">{progress}%</p>
      )}
    </div>
  )
}
