'use client'
import React, { FormEvent } from 'react'

const RegForm = () => {
    const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            }),
        })
    }
  return (
    <form onSubmit={HandleSubmit} className='form-control p-5 my-5 gap-2 mx-auto max-w-md mt-10'>
                <span className='text-2xl self-center'>Register</span>
                <input className="input" type="text" placeholder="Email" name="email" />
                <input className="input" type="password" placeholder="Password" name="password" />

                <button className="btn" type="submit">Submit</button>
            </form>
  )
}

export default RegForm