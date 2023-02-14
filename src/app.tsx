import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NAVIGATOR_ITEMS } from '@/common/components/sidenav'
import LoadingScreen from './common/components/loading-screen'
import Sidenav from './common/components/sidenav'
import Footer from './common/components/footer'

const App = () => {
  return (
    <div className='app h-full'>
      <Sidenav />
      <div className='h-full flex flex-col'>
        <main className='relative flex-1 overflow-auto mt-3 mr-3 bg-white rounded shadow-lg p-4'>
          <Routes>
            {NAVIGATOR_ITEMS.map(({ page, href, index = false }, i) => {
              return (
                <Route
                  key={i}
                  element={
                    <Suspense fallback={<LoadingScreen />}>{page}</Suspense>
                  }
                  path={href}
                  index={index}
                />
              )
            })}
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
