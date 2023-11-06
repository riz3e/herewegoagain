'use client'
import { signOut } from 'next-auth/react'
import React from 'react'


const LogoutNavBarBtn = () => {
    return (
        <div>
            <button className='btn m-5' onClick={() => (
                signOut()
            )}>Logout</button>
        </div>
    )
}

export default LogoutNavBarBtn

