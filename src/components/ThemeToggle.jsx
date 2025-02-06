import React, { useEffect, useState} from 'react'
import { CssBaseline, Switch, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../theme/Theme'

export default function ThemeToggle({ children}) {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === true
    })

    useEffect(()=> {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
        {children}
    </ThemeProvider>
  )
}
