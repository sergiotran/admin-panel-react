import classNames from 'classnames'
import React from 'react'

type Props = {
  title: string
  actions?: React.ReactNode
  withScroll?: boolean
} & React.PropsWithChildren
const MainLayout: React.FC<Props> = ({
  title,
  actions,
  children,
  withScroll = true
}) => {
  const classes = classNames({
    'flex-1 flex flex-col': true,
    'overflow-auto': withScroll
  })
  return (
    <div className='flex flex-col h-full p-3'>
      <div className='flex flex-col md:flex-row pt-10 md:pt-0 items-start md:items-center gap-5 mb-3'>
        <h1 className='text-lg font-medium border-l border-l-4 border-l-red-500 pl-3'>
          {title}
        </h1>
        {actions && actions}
      </div>
      <div className={classes}>{children}</div>
    </div>
  )
}

export default MainLayout
