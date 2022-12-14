import React, { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import MainContainer from './components/MainContainer'
import setTheme from './theme/Theme'
import {
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  useMediaQuery,
} from '@mui/material'
import { withProvider } from './store'
import { ThemeProvider } from '@emotion/react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = setTheme(darkMode)
  const matches = useMediaQuery(theme.breakpoints.down('xs')) // Anything size xs we return matches

  return (
    <ThemeProvider theme={theme}>
 <Grid
      sx={{
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
          paddingTop: theme.spacing(2), // Material UI spacing
        },
        position: 'absolute',
        overflow: 'auto',
        backgroundImage: `url(${'https://www.transparenttextures.com/patterns/cubes.png'})`,
      }}
      container
      justifyContent="center"
      alignItems={matches ? 'flex-start' : 'center'}
    >
      <Grid item>
        <Paper elevation={8}>
          <MainContainer />
        </Paper>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
          label="Dark Mode"
        />
        <Footer />
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default withProvider(App)
