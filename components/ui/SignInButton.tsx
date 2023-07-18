'use client'

import { FunctionComponent, useState } from 'react'
import { Button } from './Button'

interface SignInButtonProps {}

const SignInButton: FunctionComponent<SignInButtonProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const signInWithGoogle = async () => {
    // try {
    //     setIsLoading(true)
    //     await signI
    // }
  }
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  )
}

export default SignInButton
