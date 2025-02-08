import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='w-screen p-3 px-5 flex  justify-between shadow-md bg-orange-100 ml-0'>
             <Link to={'/dashboard'}>
            <img   src='/logo.svg' className='   cursor-pointer' width={50} height={50} />
            </Link>
            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button className='bg-black'>Get Started</Button>
                </Link>
            }

        </div>
    )
}

export default Header