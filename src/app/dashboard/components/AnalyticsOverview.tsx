'use client'

import  { useState } from 'react'

// ** Components
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import TabsContentOne from './TabsContentOne'

interface UserViewDetailsProps {

}

const AnalyticsTableOverview = () => {
  const [rating, setRating] = useState(0)

  return (
    <div>      
      {/* user header action */}
      <div className='w-full flex items-center justify-between'>
        <h3 className='text-b200 text-2xl font-medium'>Market News & Sentiment </h3>
      </div>

      {/* user details tab panel */}
      <div className='mt-10 w-full'>
        <div className='relative w-full h-[210px] border border-[#213f7d0f] drop-shadow-sm rounded-[4px] bg-white p-6'>
          {/*  */}
          <div className='p-6'>
            <div className="flex h-7 items-center space-x-4 text-sm">
              <div className='flex items-center space-x-3'>
                {/* name */}
                <div className='space-y-1 flex flex-col'>
                  <h2 className='text-[22px] text-n500 font-medium'>Title</h2>
                  <p className='text-sm text-n500 font-normal'>Link</p>
                </div>
              </div>
              <Separator orientation="vertical" className='bg-n500 h-[80px]' />
              <div>
                <p className='text-sm text-n500 font-medium'>Avatr</p>
              </div>
              <Separator orientation="vertical" className='bg-n500 h-[80px]'/>
              <div className='space-y-1'>
                <p className='text-[22px] text-b200 font-medium space-y-1'>Author</p>
                <p className='text-xs text-b200 font-normal'>Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AnalyticsTableOverview