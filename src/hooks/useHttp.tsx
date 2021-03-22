import axios from 'axios'
import { useCallback, useState } from 'react'
import { apiClient } from '../apiClient'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const request = useCallback(async (url, body = null, headers = {}) => {
    setLoading(true)
    try {
      // if (body) {
      //   body = JSON.stringify(body)
      //   headers['Content-Type'] = 'application/json'
      // }

      // const response = await fetch(url, { method, body, headers })
      console.log('body', body)
      console.log('url', url)
      const response = await apiClient.post(url, body)

      // const data = await response.json()
      const data = await response.data

      // if (!response.ok) {
      //   throw new Error(data.message || 'Something went wrong durring the request')
      // }

      setLoading(false)
      return data

    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }

  }, [])

  const clearError = () => setError(null)
  return { loading, error, request, clearError }
}

