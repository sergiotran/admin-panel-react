import React from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom'
import { NavigatorItem } from '@/common/types/navigator'
import classNames from 'classnames'
import { Page } from '../types/page'

// Pages lazy for code splitting
const PostManagementPage = React.lazy(() => import('@/pages/post-management'))
const SettingsPage = React.lazy(() => import('@/pages/settings'))
const RevenueChartPage = React.lazy(() => import('@/pages/dashboard/revenue'))
const SubscriptionsChartPage = React.lazy(
  () => import('@/pages/dashboard/subscription')
)

// Define navigation items
export const NAVIGATOR_ITEMS: NavigatorItem[] = [
  {
    value: 'Dashboard',
    href: '/dashboard/subscriptions'
  },
  {
    value: 'Post Management',
    href: '/post-management'
  },
  { value: 'Settings', href: '/settings' }
]

export const PAGES: Page[] = [
  {
    value: 'Subscription Chart',
    href: '/dashboard/subscriptions',
    page: <SubscriptionsChartPage />
  },
  {
    value: 'Revenue Chart',
    href: '/dashboard/revenue',
    page: <RevenueChartPage />
  },
  {
    value: 'Post Management',
    href: '/post-management',
    page: <PostManagementPage />
  },
  { value: 'Settings', href: '/settings', page: <SettingsPage /> }
]

const Sidenav: React.FC = () => {
  const location = useLocation()

  return (
    <nav className='fixed w-full md:w-44 left-0 top-0 md:h-full md:max-h-full scrollbar-hide overflow-auto bg-white shadow-lg z-50'>
      <ul className='flex flex-row md:flex-col'>
        {NAVIGATOR_ITEMS.map(({ href, value }, index) => {
          const activeItem =
            location.pathname === href ||
            href
              .split('/')
              .filter(item => item.trim().length > 0)
              .some(href =>
                location.pathname
                  .split('/')
                  .filter(item => item.trim().length > 0)
                  .includes(href)
              )
          const linkClasses = ({ isActive }: { isActive: boolean }) => {
            return classNames({
              'block py-2 px-4 font-medium text-sm whitespace-nowrap': true,
              'bg-red-500 text-white': isActive || activeItem
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
