import MainLayout from '@/common/layouts/main-layout'
import { Helmet } from 'react-helmet-async'

const DashboardPage = () => {
  const title = 'Dashboard'

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainLayout title={title}>content</MainLayout>
    </>
  )
}

export default DashboardPage
