'use client'

import  { useState } from 'react'

// ** Components
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// ** Store
import { useGetMarketNewsQuery } from '@/store/features/market/MarketNewsService'
import { timeConverter } from '@/lib/utils'
import Link from 'next/link'



const AnalyticsTableOverview = () => {
  const [rating, setRating] = useState(0)
  const {data: marketNewsData, isLoading} = useGetMarketNewsQuery();



  return (
    <div>      
      {/* user header action */}
      <div className='w-full flex items-center justify-between'>
        <h3 className='text-b200 text-2xl font-medium'>Market News & Sentiment </h3>
      </div>

      {/* user details tab panel */}
      <div className='mt-10 w-full'>
        <div className='relative w-full flex items-center  h-[210px] border border-[#213f7d0f] drop-shadow-sm rounded-[4px] bg-primary p-6'>
          {/*  */}
          <div className='p-6'>
            <div className="flex items-center space-x-4 text-sm">
              <div className='flex items-center space-x-3'>
                <div>
                  <Avatar className="w-[150px] h-[150px]">
                    <AvatarImage src={marketNewsData?.feed[2].banner_image}  />
                    <AvatarFallback>{marketNewsData?.feed[2].authors[0].charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                {/* name */}
                <div className='space-y-1.5 flex flex-col'>
                  <h2 className='text-[22px] text-white font-medium'>{marketNewsData?.feed[2].authors[0]}</h2>
                  <p className='text-sm text-white font-normal'>{marketNewsData && timeConverter(marketNewsData.feed[0].time_published)}</p>
                  <Button className='bg-white text-n800 text-sm capitalize'>
                    <Link target='_blank' href={marketNewsData && marketNewsData?.feed[2]?.url.toString() || "#"}>read more</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AnalyticsTableOverview