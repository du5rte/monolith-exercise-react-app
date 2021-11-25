import { useEffect, useState, useCallback } from "react"

import axios, { AxiosResponse, AxiosError } from "axios"
import delay from 'delay'

export function useFetch<T>(url: string) {
    const [response, setResponse] = useState<AxiosResponse<T>>()
    const [error, setError] = useState<AxiosError>()
    const [loading, setLoading] = useState(false)
  
    const fetch = useCallback(async (url) => {
        setLoading(true)
        setError(undefined)
  
        try {
          // for demo purpose
          await delay(1000)

          const resp = await axios.get<T>(url)
  
          setResponse(resp)
        } catch (error) {
          if (axios.isAxiosError(error))  {
            setError(error)
          }
        } finally {
          setLoading(false)
        }
      }, []
    )
  
    useEffect(() => {
      fetch(url)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
  
    return {
      ...response,
      loading,
      error
    }
  }