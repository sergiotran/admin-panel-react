import { Table, flexRender } from '@tanstack/react-table'

type Props<TData> = {
  table: Table<TData>
}
const Table = <T extends object>(props: Props<T>) => {
  const { table } = props

  return (
    <div>
      <table className='rounded w-full min-w-[500px]'>
        <thead className='sticky top-0 shadow-lg bg-red-400 text-white'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  className='p-2 text-white text-left whitespace-nowrap'
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td className='p-2 border' key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
