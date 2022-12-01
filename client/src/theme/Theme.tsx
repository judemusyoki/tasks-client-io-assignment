import { amber } from '@mui/material/colors'
import green from '@mui/material/colors/green'
import purple from '@mui/material/colors/purple'
import { createTheme } from '@mui/material/styles'

export type PaletteMode = 'light' | 'dark'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: purple,
    secondary: green,
    warning: amber,
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: purple,
    secondary: green,
  },
})

const setTheme = (darkMode: boolean) => {
  const theme = darkMode ? darkTheme : lightTheme

  return theme
}

export default setTheme
