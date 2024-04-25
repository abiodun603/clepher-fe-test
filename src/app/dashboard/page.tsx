// ** Components
import AnalyticsOverview from './components/AnalyticsOverview'
import AnalyticsTable from './components/AnalyticsTable'

const Dashboard = () => {
  return (
    <div className='space-y-10'>
      {/* users data overview */}
      <div className='space-y-6'>
        <AnalyticsOverview />
      </div>

      {/* users data overview */}
      <div className='w-full '>
        <AnalyticsTable />
      </div>
    </div>
  )}

export default Dashboard