"use client"

import Link from 'next/link'

import { ColumnDef } from "@tanstack/react-table"

// ** Icon
import { EllipsisVertical, Eye, BookOpen  } from 'lucide-react';
import { timeConverter } from '@/lib/utils';

// ** Component
import { DataTableColumnHeader } from './column-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// ** Types
import { marketDataDataTableProps } from '@/types/types';

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
      const banner_image: string = marketData?.banner_image 

    
      return <div className='flex items-center space-x-2'>
                <div>
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src={banner_image}  />
                    <AvatarFallback>{title.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <p className="table-text capitalize truncate">{title}</p>
              </div>
    },
  },
  {
    accessorKey: "source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),      
    cell: ({ row }) => {
        const marketData = row.original
        const source: string = marketData?.source || ""

        return <div>
          <p className='table-text capitalize'>{source}</p>
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
      const time_published: string = marketData?.time_published || ""
 
      return <p className="table-text">{timeConverter(time_published) || "---"}</p>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const marketData = row.original
      const url: string = marketData?.url || ""
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
              <Link target="_blank" href={url || "#"} >
                <div className='flex items-center space-x-2 '>
                  <BookOpen className='text-n500 text-sm'/>
                  <h3 className='text-sm capitalize font-semibold'>Read more</h3>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
