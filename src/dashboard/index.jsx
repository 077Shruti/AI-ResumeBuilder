import React from 'react'
import AddResume from './components/AddResume'

function Dashboard()  {
 
    return (
      <div>
        <div className='p-10 md:px-20 lg:px-32'>
          <h2 className='font-bold text-3xl'>My Resume</h2>
          <p>Start Creating AI Resume to your next Job role</p>
          <div className='grid grid-col2 md:grid-cols-3 lg:grid-cols-5 mt-8'>
            <AddResume/>
          </div>
        </div>
      </div>
    )
  } 


export default Dashboard
