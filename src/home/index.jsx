import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import React from 'react'

function Home() {
    return (
      <div className="absolute top-0 left-0 m-4">
        <Header/>
        <UserButton/>
        
        
      </div>
    )
  }


export default Home
