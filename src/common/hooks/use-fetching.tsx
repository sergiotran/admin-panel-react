import React from 'react'
import { httpClient } from '../utils/http'

const useFetching = <T extends object>(url: string) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    setIsLoading(true)
    httpClient
      .get(url)
      .then(({ data }) => {
        setIsLoading(false)
        setData(data)
      })
      .catch(error => {
        setIsLoading(false)
        setError(error as Error)
      })
  }, [url])

  return {
    data,
    error,
    isLoading
  }
}

export default useFetching
