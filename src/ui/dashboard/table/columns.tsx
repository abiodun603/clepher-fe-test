"use client"

import Link from 'next/link'

import { ColumnDef } from "@tanstack/react-table"

// ** Icon
import { EllipsisVertical, Eye  } from 'lucide-react';

// ** Component
import { DataTableColumnHeader } from './column-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


// This type is used to define the shape of our data.
export type marketDataDataTableProps = {
  id?: number;
  title: string
  category_within_source: string
  authors: string[]
  time_published?:string;
}


export const columns: ColumnDef<marketDataDataTableProps>[] = [
  {
    id:"title",
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const marketData = row?.original
      const title: string = marketData?.title || ""

      return <div>
        <p className="table-text capitalize">{title}</p>
      </div>
    },
  },
  {
    accessorKey: "category_within_source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),      
    cell: ({ row }) => {
        const marketData = row.original
        const caterory: string = marketData?.category_within_source || ""

        return <div>
          <p className='table-text capitalize'>{caterory}</p>
        </div>
      },
    },
  {
    accessorKey: "authors",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Authors" />
    ),   
    cell: ({ row }) => {
      const marketData = row.original
      const authors: string = marketData?.authors[0] || ""

      return <div>
        <p className='table-text'>{authors}</p>
      </div>
    },
  },
  {
    accessorKey: "time_published",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time Pubslished" />
    ),   
    cell: ({ row }) => {
      const marketData = row.original
      const time_published: string = marketData?.authors[0] || ""
 
      return <p className="table-text">{time_published || "---"}</p>
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Joined" />
    ),   
    cell: ({ row }) => {
      const date: string  = row.getValue("date")
 
      return <div className="flex items-center space-x-4">
        <div className="table-text">{date || "---"}</div>
      </div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <EllipsisVertical className="h-4 w-4 text-2xl"  size={80} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white space-y-2 pl-6 pr-10 py-4">
            <DropdownMenuItem>
              <Link href="/dashboard/1233" >
                <div className='flex items-center space-x-2 '>
                  <Eye className='text-n500 text-sm'/>
                  <h3 className='text-sm capitalize font-semibold'>View Details</h3>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
