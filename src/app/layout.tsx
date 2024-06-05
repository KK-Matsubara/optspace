import React from 'react'
import { cookies } from 'next/headers'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { MuiThemeProvider } from '@/components/provider/MuiThemeProvider'
import { Box, CssBaseline } from '@mui/material'
import '@/style/reset.css'

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  async function getInitialColorMode(): Promise<'light' | 'dark'> {
    'use server'
    const cookieColorMode = cookies().get('color-mode')?.value
    if (!cookieColorMode || (cookieColorMode !== 'light' && cookieColorMode !== 'dark')) {
      return 'light'
    }
    return cookieColorMode
  }

  return (
      <html>
      <body style={{ backgroundColor: 'darkgrey' }}>
      <AppRouterCacheProvider>
        <MuiThemeProvider initialColorMode={await getInitialColorMode()}>
          <CssBaseline />
          <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
            {children}
          </Box>
        </MuiThemeProvider>
      </AppRouterCacheProvider>
      </body>
      </html>
  )
}
