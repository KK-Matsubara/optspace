'use client'
import React, { useState, useMemo, createContext } from 'react'
import Cookie from 'js-cookie'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { theme } from '@/style/theme'

interface Props {
  initialColorMode: 'light' | 'dark'
  children: React.ReactNode
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {
  }
})

export function MuiThemeProvider({ initialColorMode, children }: Props) {
  const [mode, setMode] = useState<'light' | 'dark'>(initialColorMode)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const nextMode = mode === 'light' ? 'dark' : 'light'
        Cookie.set('color-mode', nextMode)
        setMode(nextMode)
      }
    }), [mode])

  const selectedTheme = useMemo(() => createTheme(theme(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={selectedTheme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}