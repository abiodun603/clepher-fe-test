"use client"

// ** UI
import { columns } from "@/ui/dashboard/table/columns"
import { DataTable } from "@/ui/dashboard/table/data-table"

// ** Store
import { useGetMarketNewsQuery } from "@/store/features/market/MarketNewsService"


const MarketTable = () => {
  const {data: martetNewsData, isLoading} = useGetMarketNewsQuery();

  return (
    <div>
      <DataTable columns={columns} data={martetNewsData?.feed || []} />
    </div>
  )
}

export default MarketTable