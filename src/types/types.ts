// This type is used to define the shape of our data.
export type marketDataDataTableProps = {
    id?: number;
    url: string;
    title: string
    source: string
    authors: string[]
    time_published:string;
    banner_image: string;
  }

export interface MarketNews {
    feed: marketDataDataTableProps[]
}