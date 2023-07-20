'use client'

import { FunctionComponent, useState } from 'react'
import { Button } from './Button'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
import { SupabaseClient } from '@supabase/supabase-js'

interface SignInButtonProps {}

const SignInButton: FunctionComponent<SignInButtonProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const signInWithGoogle = async () => {
    // try {
    //     setIsLoading(true)
    //     await signI
    // }
    // const { data, error } = await 
  }
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  )
}

export default SignInButton
