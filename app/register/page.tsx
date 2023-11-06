
import React, { FormEvent } from 'react'
import RegForm from './form'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const RegisterPage = async () => {
    const session = await getServerSession()
  if (!!session) {
    redirect('/')
  }
    return (
        <div>
            <RegForm />
        </div>
    )
}

export default RegisterPage