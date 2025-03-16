import React, { useEffect, useState }  from 'react'
import PersonalDetail from './forms/PersonalDetail'
import Summery from './forms/Summery';
import { Button } from '@/components/ui/button'
import {ArrowLeft, ArrowRight,LayoutGrid} from 'lucide-react'


function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(2);
  const [enabledNext,setEnableNext]=useState(false)
  return (
    
      <div>
        <div className='flex justify-between items-center'>
          <Button variant="outline" size="sm" className="flex-gap-2"><LayoutGrid/>Theme</Button>
          <div className='flex gap-2'>
            {activeFormIndex>1&&<Button size='sm'
            onClick={()=>setActiveFormIndex(activeFormIndex-1)}  
            ><ArrowLeft/></Button>}
            <Button disabled={!enabledNext}
            className="flex gap-2" size="sm"
              onClick={()=>setActiveFormIndex(activeFormIndex+1)}
            >Next
              <ArrowRight/>
            </Button>
          </div>
        </div>
      
      {/* personal Detail */}
      {activeFormIndex==1 ?<PersonalDetail enabledNext={(v)=>setEnableNext(v)}/>
      :activeFormIndex==2?
              <Summery/>:null
      
      
      }


      {/* Experience */}


      {/* Educational */}

      {/* Skills */}

      
   
      </div>




    
  )
}

export default FormSection
