import MainLayout from '@/common/layouts/main-layout'
import { Helmet } from 'react-helmet-async'

const SettingsPage = () => {
  const title = 'Settings'

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainLayout title={title}>Content</MainLayout>
    </>
  )
}

export default SettingsPage
