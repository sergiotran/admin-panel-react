import MainLayout from '@/common/layouts/main-layout'
import { Helmet } from 'react-helmet-async'
import ChartTabs from '@/common/components/chart-tabs'
import SubscriptionChart from '@/common/components/subscription-chart'

const SubscriptionsChartPage = () => {
  const title = 'Subscriptions Chart View'

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainLayout title={title} actions={<ChartTabs />}>
        <SubscriptionChart />
      </MainLayout>
    </>
  )
}

export default SubscriptionsChartPage
