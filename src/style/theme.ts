import type { PaletteMode } from '@mui/material'
import { amber, grey } from '@mui/material/colors'

export const theme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ?
      // lightMode
      {
        primary: amber,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[700]
        },
        background: {
          default: grey[200],
          secondary: grey[100],
          paper: grey[50]
        }
      }
      :
      // darkMode
      {

      })
  }
})