import axios from 'axios'
import { useCallback, useState } from 'react'
import { apiClient } from '../apiClient'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const request = useCallback(async (url, body = null, headers = {}) => {
    setLoading(true)
    try {
      const response = await apiClient.post(url, body)
      const data = await response.data
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

