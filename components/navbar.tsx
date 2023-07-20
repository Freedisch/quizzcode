import Link from 'next/link'
import React, { useState } from 'react'
import { Button, buttonVariants } from './ui/Button'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Link as link2 } from 'react-router-dom'
import ConfirmationModal from './confirmation-modal'
const navigation = [
  { title: 'Dashboard', path: '/home', disabled: false },
  { title: 'Quizzes', path: '/opportunity', disabled: false },
  { title: '⭐ Give a star', path: '/support' },
]

export default function Navbar() {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false)
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-20 shadow-sm flex items-center justify-between">
      <div className="items-center space-x2 md:flex">
        <Link
          href="/"
          className={buttonVariants({ variant: 'link', size: 'lg' })}
        >
          Quizzcode v1.0
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navigation.map((item, idx) => {
            return (
              <li
                key={idx}
                className={cn(
                  'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'
                )}
              >
                <a href={item.path}>{item.title}</a>
              </li>
            )
          })}
        </nav>
        {confirmationModalOpen && (
          <ConfirmationModal
            isOpen={confirmationModalOpen}
            handleClose={() => setConfirmationModalOpen(!confirmationModalOpen)}
          >
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex flex-col mt-auto mb-auto items-center p-8">
                <span>Login to Quizzcode</span>
              </div>
              <div className="flex- flex-col sm:flex-row justify-center gap-8 align-center">
                <Button className="" onClick={() => {}}>
                  Login with Google
                </Button>

                <Button className="" onClick={() => {}}>
                  Login with Google
                </Button>
              </div>
            </div>
          </ConfirmationModal>
        )}
      </div>
    </div>
  )
}
