import { Link } from 'react-router-dom'
import { Notebook } from 'lucide-react'
import React from 'react'

function ResumeCardItem({resume}) {
  return (
      <Link to={'/dashboard/resume/'+resume.resumeId+"/edit"}>
    
        <div className='p-14 bg-secondary flex
  items-center justify-center h-[280px] 
  border-2 border-orange-700 rounded-lg
  hover:scale-105 transition-all hover:shadow-md shadow-orange-700
  cursor-pointer
       '>
                <Notebook/>
        </div>
        <h2>{resume.title}</h2>
        </Link>
        
      
   

  )
}

export default ResumeCardItem
