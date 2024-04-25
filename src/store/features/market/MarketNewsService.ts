import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/config/auth-config'

//types
import { MarketNews } from '@/types/types'

export const marketNewsApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getMarketNews: builder.query<MarketNews, void>({
        query: () => ({
          url: `/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=${process.env.STOCKS_API_KEY}`,
          method: 'GET',
        }),
      }),
  })
})

export const { useGetMarketNewsQuery } = marketNewsApi