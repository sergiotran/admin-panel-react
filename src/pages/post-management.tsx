import React from 'react'
import MainLayout from '@/common/layouts/main-layout'
import { Helmet } from 'react-helmet-async'
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper
} from '@tanstack/react-table'
import Table from '@/common/components/table'
import { Post } from '@/common/types/post'
import useFetching from '@/common/hooks/use-fetching'
import EyeIcon from '@/assets/eye-icon'
import useDebounce from '@/common/hooks/use-debounce'
import Pagination from '@/common/components/pagination'
import Modal from '@/common/components/modal'

const columnHelper = createColumnHelper<Post>()
const perPage = 10

const PostManagementPage = () => {
  const title = 'Post management'
  const [page, setPage] = React.useState<number>(1)
  const [dataView, setDataView] = React.useState<Post[]>([])
  const [viewPost, setViewPost] = React.useState<Post | null>(null)
  const [searchText, setSearchText] = React.useState<string>('')
  const { data, error, isLoading } = useFetching<Post[]>('/posts')
  const dataLength = (data || []).length

  const debounceSearchText = useDebounce(searchText, 500)

  const handleViewPost = React.useCallback(
    (id: number) => {
      return (event: React.MouseEvent) => {
        event.preventDefault()
        console.log(data?.find(post => post.id === id))
        if (data) setViewPost(data.find(post => post.id === id) || null)
      }
    },
    [data]
  )

  const handleChangePage = React.useCallback((page: number) => {
    setPage(page)
  }, [])

  React.useEffect(() => {
    const cloneData = [...(data || [])]
    if (debounceSearchText)
      setDataView(
        cloneData.filter(post => {
          return (
            post.title.toLowerCase().indexOf(debounceSearchText.toLowerCase()) >
              -1 ||
            (!Number.isNaN(+debounceSearchText) &&
              +debounceSearchText === post.id)
          )
        })
      )
    else setDataView(cloneData.slice((page - 1) * perPage, perPage * page))
  }, [data, debounceSearchText, page])

  const table = useReactTable({
    data: dataView,
    columns: [
      columnHelper.accessor('id', {
        id: 'id',
        cell: info => info.getValue(),
        header: () => <span>ID</span>
      }),
      columnHelper.accessor('userId', {
        id: 'userId',
        cell: info => info.getValue(),
        header: () => <span>User ID</span>
      }),
      columnHelper.accessor('title', {
        id: 'title',
        cell: info => info.getValue(),
        header: () => <span>Post Title</span>
      }),
      columnHelper.display({
        header: () => <span>Action</span>,
        cell: ({ row: { original } }) => {
          const { id } = original
          return (
            <button
              type='button'
              className='p-3 bg-blue-200 rounded cursor-pointer'
              onClick={handleViewPost(id)}
            >
              <EyeIcon width={20} height={20} />
            </button>
          )
        },
        id: 'col:action'
      })
    ],
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainLayout
        title={title}
        actions={
          <div className='ml-auto w-full md:w-auto'>
            <input
              className='w-full bg-slate-200 outline-none p-2 rounded text-sm'
              placeholder='Filter id or title...'
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
        }
      >
        <div className='flex-1 overflow-auto h-0'>
          {isLoading ? (
            <>Data is Loading...</>
          ) : !error ? (
            <Table table={table} />
          ) : (
            <>{error}</>
          )}
        </div>
        {debounceSearchText.length <= 0 && (
          <Pagination
            dataLength={dataLength}
            page={page}
            perPage={perPage}
            onChange={handleChangePage}
          />
        )}
        <Modal
          isOpen={!!viewPost}
          onClose={() => setViewPost(null)}
          title={viewPost?.title || ''}
          content={viewPost?.body || ''}
          style={{
            maxWidth: '100%',
            width: '600px'
          }}
        />
      </MainLayout>
    </>
  )
}

export default PostManagementPage
