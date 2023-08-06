import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, buttonVariants } from './ui/Button'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Link as link2 } from 'react-router-dom'
import ConfirmationModal from './confirmation-modal'
import { supabase } from '@/midelsupabase'
import { UserResponse } from '@supabase/supabase-js'
const navigation = [
  { title: 'Dashboard', path: '/courses', disabled: false },
  { title: 'Quizzes', path: '/quizzes', disabled: false },
  { title: '⭐ Give a star', path: 'https://github.com/Freedisch/quizzcode' },
]

export default function Navbar() {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false)
  const [user, setUser] = useState<any>(null)
  useEffect(() => {
    checkUser()
    window.addEventListener('hashchange', () => {
      checkUser()
    })
  }, [])
  const checkUser = async () => {
    const user = await supabase.auth.getUser()
    setUser(user)
  }
  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    console.log('est')
  }
  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }
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
            <div className="relative w-full max-w-lg p-4 mx-auto bg-slate-100 rounded-md shadow-lg">
              <div className="mt-2 text-center">
                <span>Login to Quizzcode</span>
                <p>
                  Welcome into the new designed skill assessements. <br />
                  Sign in to start your learning journey.
                </p>
              </div>
              <div className="flex justify-center gap-2 mt-9 sm:flex">
                <Button onClick={() => {}}>Google</Button>

                <Button onClick={signInWithGithub}>Github</Button>
                <Button
                  className="hover:bg-red-500 text-red-400"
                  onClick={() =>
                    setConfirmationModalOpen(!confirmationModalOpen)
                  }
                >
                  Cancel
                </Button>
              </div>
            </div>
          </ConfirmationModal>
        )}
      </div>
      <div className=" flex mx-10 justify-between items-center">
        {user ? (
          <Button className="" onClick={signOut}>
            SignOut
          </Button>
        ) : (
          <Button className="" onClick={() => setConfirmationModalOpen(true)}>
            Login
          </Button>
        )}
      </div>
    </div>
  )
}
