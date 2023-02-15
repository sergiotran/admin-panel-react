import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

const ChartTabs = () => {
  const tabItemClasses = ({ isActive }: { isActive: boolean }) => {
    return classNames({
      'block px-3 py-2 bg-gray-100 rounded text-sm': true,
      'bg-red-500 text-white': isActive
    })
  }
  return (
    <ul className='flex flex-row gap-2'>
      <li>
        <NavLink className={tabItemClasses} to='/dashboard/subscriptions'>
          Subscription
        </NavLink>
      </li>
      <li>
        <NavLink className={tabItemClasses} to='/dashboard/revenue'>
          Revenue
        </NavLink>
      </li>
    </ul>
  )
}

export default ChartTabs
