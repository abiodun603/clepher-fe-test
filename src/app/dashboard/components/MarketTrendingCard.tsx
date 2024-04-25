'use client'

import  { useEffect, useState } from 'react'

// ** Components
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// ** Store
import { useGetMarketNewsQuery } from '@/store/features/market/MarketNewsService'
import { timeConverter } from '@/lib/utils'
import Link from 'next/link'



const MarketTrendingCard = () => {
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

  const {data: marketNewsData, isLoading} = useGetMarketNewsQuery();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1; 
      setRandomIndex(randomNumber);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); //


  return (
    <div>      
      <div className='mt-10 w-full'>
        <div className='relative w-full flex items-center justify-between  h-[210px] border border-[#213f7d0f] drop-shadow-sm rounded-[4px] bg-primary p-6'>
          {/*  */}
          <div className='p-6'>
            <div className="flex items-center space-x-4 text-sm">
              <div className='flex items-center space-x-3'>
                <div>
                  <Avatar className="w-[150px] h-[150px]">
                    <AvatarImage src={marketNewsData?.feed[randomIndex ?? 0].banner_image}  />
                    <AvatarFallback>{marketNewsData?.feed[randomIndex ?? 0].authors[0].charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                {/* name */}
                <div className='space-y-1.5 flex flex-col'>
                  <h2 className='text-[22px] text-white font-medium'>{marketNewsData?.feed[randomIndex ?? 0].authors[0]}</h2>
                  <p className='text-sm text-white font-normal'>{marketNewsData && timeConverter(marketNewsData.feed[randomIndex ?? 0].time_published)}</p>
                  <Button className='bg-white text-n800 text-sm capitalize'>
                    <Link target='_blank' href={marketNewsData && marketNewsData?.feed[randomIndex ?? 0]?.url.toString() || "#"}>read more</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <h3 className='text-white text-3xl font-medium'>Market News & Sentiment </h3>
        </div>
      </div>

    </div>
  )
}

export default MarketTrendingCard