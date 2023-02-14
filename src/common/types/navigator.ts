import React from 'react'

export type NavigatorItem = {
  value: string
  href: string
  page: React.ReactNode
  index?: boolean
}
