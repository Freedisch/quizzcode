import { cn } from '@/lib/utils'
import { MainNavItem } from '@/types'
import { Link } from 'lucide-react'
import React from 'react'
import { Icons } from './icons'
import { useLockBody } from '@/hooks/use-lock-body'

interface MobileProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export default function Mobilenav({ items, children }: MobileProps) {
  useLockBody()

  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32  shadow-md animate-in-from-bottom-80 md:hidden'
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover -4 text-popover-foreground shadow-md">
        <Link to="/" className="flex items-center space-x-2">
          <Icons.logo />
          <span className="font-bold">CodeEnd</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.disabled ? '#' : item.href}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                item.disabled && 'cursor-not-allowed opacity-60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
