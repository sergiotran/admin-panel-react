import classNames from 'classnames'
import React from 'react'

type Props = {
  dataLength: number
  perPage: number
  page: number
  onChange: (page: number) => void
}
const Pagination: React.FC<Props> = ({
  dataLength,
  page,
  perPage,
  onChange
}) => {
  return (
    <div className='pt-4 flex gap-2 items-center flex-wrap justify-end'>
      {Array(Math.ceil(dataLength / perPage))
        .fill(null)
        .map((_, index) => {
          const buttonClasses = classNames({
            'p-2 text-sm rounded bg-slate-300 block px-3': true,
            '!bg-red-600 text-white': page === index + 1
          })
          return (
            <button
              className={buttonClasses}
              onClick={() => onChange(index + 1)}
              key={index}
            >
              {index + 1}
            </button>
          )
        })}
    </div>
  )
}

export default Pagination
