import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PAGES } from '@/common/components/sidenav'
import LoadingScreen from './common/components/loading-screen'
import Sidenav from './common/components/sidenav'
import Footer from './common/components/footer'

const App = () => {
  return (
    <div className='app h-auto md:h-full flex flex-col md:block'>
      <Sidenav />
      <div className='h-screen overflow-auto md:h-screen overflow-visible flex flex-col overflow-hidden'>
        <main className='relative basis-full h-0 md:mt-3 md:mr-3 bg-white rounded shadow-lg'>
          <Routes>
            {PAGES.map(({ page, href, index = false }, i) => {
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
