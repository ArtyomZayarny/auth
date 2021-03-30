import { createContext } from 'react'

function noop() { }

type AuthTypes = {
  token: string | null,
  login: (token: string) => void,
  isAuthenticated: boolean,
}

export const AuthContext = createContext<AuthTypes>({
  token: null,
  login: noop,
  isAuthenticated: false
})