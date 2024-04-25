"use client"

// ** UI
import { columns } from "@/ui/dashboard/table/columns"
import { DataTable } from "@/ui/dashboard/table/data-table"


const AnalyticsTable = () => {
  return (
    <div>
        <DataTable columns={columns} data={[]} />
    </div>
  )
}

export default AnalyticsTable