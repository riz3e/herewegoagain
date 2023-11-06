import Link from 'next/link'
import React from 'react'

const LoginNavBarBtn = () => {
    return (
        <div>
            <Link href='/login' passHref>
                <button className='btn'>Login</button></Link>

        </div>
    )
}

export default LoginNavBarBtn