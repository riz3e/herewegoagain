'use client'
import { signIn } from 'next-auth/react'
import React, { FormEvent } from 'react'
import { CredentialModel } from '../validation/CredentialModel'
import { useRouter } from 'next/navigation'




const LoginForm = () => {
  const Router = useRouter()
  const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
    console.log({ response })
    if (!response?.error) {
      Router.push('/');
      Router.refresh();
    }
  }
  return (
    <form onSubmit={HandleSubmit} className='form-control p-5 my-5 gap-2 mx-auto max-w-md mt-10'>
      <span className='text-2xl self-center'>Login</span>
      <input className="input" type="text" placeholder="Email" name="email" />
      <input className="input" type="password" placeholder="Password" name="password" />

      <button className="btn" type="submit">Submit</button>
    </form>
  )
}

export default LoginForm