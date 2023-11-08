'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const logoutBtn = () => {
    const HandleClick = () => {
        signOut()
    }
    
  return (
    <button className='btn btn-outline' onClick={HandleClick}>Logout</button>
  )
}

export default logoutBtn