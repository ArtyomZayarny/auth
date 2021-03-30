import { useCallback, useState, useEffect } from 'react'
import { STORAGE_NAME } from '../consts';

export const useAuth = () => {
  const [token, setToken] = useState<null | string>(null)

  const login = useCallback((jwtToken: string): void => {
    setToken(jwtToken);
    localStorage.setItem(STORAGE_NAME, JSON.stringify({ token: jwtToken }))
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]')
    if (data && data.token) {
      login(data.token)
    }

  }, [login])

  return { login, token, }

}