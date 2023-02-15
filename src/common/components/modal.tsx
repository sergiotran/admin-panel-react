import CloseCircleIcon from '@/assets/close-circle'
import React from 'react'
import ReactModal from 'react-modal'

type Props = {
  isOpen: boolean
  onClose: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void
  title: string
  content: React.ReactNode
  style?: React.CSSProperties
}
const Modal: React.FC<Props> = ({ title, content, isOpen, onClose, style }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={document.getElementById('root') as HTMLElement}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        },
        content: {
          position: 'relative',
          inset: 'auto',
          width: '100%',
          padding: '1rem',
          ...(style || {})
        }
      }}
    >
      <div className='flex flex-col overflow-auto'>
        <div className='flex flex-row items-start'>
          <h2 className='text-lg font-bold flex-1'>{title}</h2>
          <button className='cursor-pointer outline-none' onClick={onClose}>
            <CloseCircleIcon width={20} height={20} />
          </button>
        </div>
        <div className='p-3 border rounded mt-3'>{content}</div>
      </div>
    </ReactModal>
  )
}

export default Modal
