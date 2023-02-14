import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { NavigatorItem } from '@/common/types/navigator'
import classNames from 'classnames'

// Pages lazy for code splitting
const DashboardPage = React.lazy(() => import('@/pages/dashboard'))
const PostManagementPage = React.lazy(() => import('@/pages/post-management'))
const SettingsPage = React.lazy(() => import('@/pages/settings'))

// Define navigation items
export const NAVIGATOR_ITEMS: NavigatorItem[] = [
  {
    value: 'Dashboard',
    href: '/dashboard',
    page: <DashboardPage />,
    index: true
  },
  {
    value: 'Post Management',
    href: '/post-management',
    page: <PostManagementPage />
  },
  { value: 'Settings', href: '/settings', page: <SettingsPage /> }
]

const Sidenav: React.FC = () => {
  return (
    <nav className='fixed w-44 left-0 top-0 h-full max-h-full overflow-auto bg-white shadow-lg'>
      <ul className='flex flex-col'>
        {NAVIGATOR_ITEMS.map(({ href, value }, index) => {
          const linkClasses = ({ isActive }: { isActive: boolean }) => {
            return classNames({
              'block py-2 px-4 font-medium': true,
              'bg-red-500 text-white': isActive
            })
          }
          return (
            <li className='relative' key={index}>
              <Link to={href} className={linkClasses}>
                {value}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidenav
