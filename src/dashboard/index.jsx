import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import {useUser} from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi.js';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard()  {
  const {user}=useUser();
  const [resumeList,setResumeList]=useState([]);
  useEffect(()=>{
    user&&GetResumesList()
  },[user])
  /**
   * Userd to get use Resume List
   */
  const GetResumesList=()=>{

    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp=>{
      setResumeList(resp.data.data);
    })
  }
 
    return (
      <div>
        <div className='p-10 md:px-20 lg:px-32'>
          <h2 className='font-bold text-3xl'>My Resume</h2>
          <p>Start Creating AI Resume to your next Job role</p>
          <div className='grid grid-col2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8'>
            <AddResume/>
            {resumeList.length>0&&resumeList.map((resume,index)=>(
              <ResumeCardItem resume={resume} key={index}/>
            ))}
          </div>
        </div>
      </div>
    )
  } 


export default Dashboard
