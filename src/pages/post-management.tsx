import MainLayout from '@/common/layouts/main-layout'
import { Helmet } from 'react-helmet-async'

const PostManagementPage = () => {
  const title = 'Post management'

  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      <MainLayout title={title}>Content</MainLayout>
    </>
  )
}

export default PostManagementPage
