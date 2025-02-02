import { CirclePlus, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../../service/GlobalApi.js';


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

function AddResume() {
    const [openDialog,setOpenDialog ]=useState(false)
    const [resumeTitle,setResumeTitle]=useState();
    const {user}=useUser();
    const [loading,setLoading]=useState(false);


    const onCreate=()=>{
      setLoading(true);
      const uuid=uuidv4();
      const data={
        title:resumeTitle,
        resumeid:uuid,
        UserEmail:user?.primaryEmailAddress?.emailAddress,
        UserName:user?.fullName
      }
      GlobalApi.CreateNewResume(data).then(resp=>{
        console.log(resp);
        if(resp){
          setLoading(false);
        }
      },(error)=>{
        setLoading(false);
      })

      
    }
  return (
    <div>
      <div className='p-14 py-24 border items-center flex justify-center bg-secondary w-48 
      rounded-lg h-[280px]
      hover:scale-105 transition-all hover:shadow-md 
      cursor-pointer
      border-dashed'
      onClick={()=>setOpenDialog(true)}>
        <CirclePlus/>
        </div> 
            <Dialog open={openDialog}>
    <DialogContent>
        <DialogHeader>
        <DialogTitle>Create New Resume</DialogTitle>
        <DialogDescription>
            <p>Add a title for your new Resume</p>
            <Input className="my-2" placeholder="Ex.Java Developer" onChange={(e)=>setResumeTitle(e.target.value)}/>
        </DialogDescription>
        <div className='flex justify-end gap-5'>
            <Button className="bg-amber-800 text-white" onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
            <Button 
            disabled={!resumeTitle ||loading}
            className="bg-amber-800 text-white "  onClick={()=>onCreate()}>
              {loading?
              <Loader2 className='animate-spin'/>:'Create'
            }
              </Button>
        </div>
        </DialogHeader>
    </DialogContent>
    </Dialog>
                 
    </div>
  )
}

export default AddResume
