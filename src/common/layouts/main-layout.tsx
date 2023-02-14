import React from 'react'

type Props = {
  title: string
} & React.PropsWithChildren
const MainLayout: React.FC<Props> = ({ title, children }) => {
  return <div>{title}</div>
}

export default MainLayout
