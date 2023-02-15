import React from 'react'
import MainLayout from '@/common/layouts/main-layout'
import { Helmet } from 'react-helmet-async'
import ChartTabs from '@/common/components/chart-tabs'
import RevenueChart from '@/common/components/revenue-chart'

const RevenueChartPage = () => {
  const title = 'Revenue Chart View'

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainLayout title={title} actions={<ChartTabs />}>
        <RevenueChart />
      </MainLayout>
    </>
  )
}

export default RevenueChartPage
