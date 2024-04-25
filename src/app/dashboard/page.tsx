// ** Components
import MarketTrendingCard from './components/MarketTrendingCard'
import MarketTable from './components/MarketTable'

const Dashboard = () => {
  return (
    <div className='space-y-10'>
      {/* users data overview */}
      <div className='space-y-6'>
        <MarketTrendingCard />
      </div>

      {/* users data overview */}
      <div className='w-full '>
        <MarketTable />
      </div>
    </div>
  )}

export default Dashboard