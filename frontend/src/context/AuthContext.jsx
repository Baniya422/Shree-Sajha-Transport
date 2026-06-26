import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('sst_token'))
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('sst_user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const login = ({ user: nextUser, token: nextToken }) => {
    setUser(nextUser)
    setToken(nextToken)
    localStorage.setItem('sst_user', JSON.stringify(nextUser))
    localStorage.setItem('sst_token', nextToken)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('sst_user')
    localStorage.removeItem('sst_token')
  }

  const value = useMemo(() => ({
    user,
    token,
    login,
    logout,
    isAuthenticated: Boolean(token),
  }), [user, token])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
