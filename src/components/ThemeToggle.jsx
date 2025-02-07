import React, { useEffect, useState} from 'react'
import { CssBaseline, Switch, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../theme/Theme'

export default function ThemeToggle({ children}) {
    const [darkMode, setDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem('darkMode')) || false
    })

    useEffect(()=> {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
        {children}
    </ThemeProvider>
  )
}
