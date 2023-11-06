import React from 'react'
import LoginForm from './Form'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


const LoginPage = async () => {

  const session = await getServerSession()
  if (!!session) {
    redirect('/')
  }
  
  return (
    <>
    
      <LoginForm />
    </>
  )
}

export default LoginPage