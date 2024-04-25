import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/config/auth-config'

export const marketNewsApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getMarketNews: builder.query<any, void>({
        query: () => ({
          url: `/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=${process.env.NEXT_PUBLIC_STOCKS_API_KEY}`,
          method: 'GET',
        }),
      }),
  })
})

export const { useGetMarketNewsQuery } = marketNewsApi