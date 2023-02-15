import React from 'react'

const useClickOutside = <T extends object>(
  ref: React.RefObject<T>,
  handler: (event: Event) => void
) => {
  React.useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        (ref.current as Element).contains(event.target as Element)
      ) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
