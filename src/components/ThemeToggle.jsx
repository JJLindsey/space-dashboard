import React, { useEffect, useState} from 'react'
import { CssBaseline, Switch, ThemeProvider, GlobalStyles, Box, FormControlLabel } from '@mui/material'
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
        <GlobalStyles
                styles={{
                    body: {
                        background: darkMode
                            ? 'linear-gradient(90deg, rgb(4, 0, 50) 0%, rgba(29,141,253,1) 50%, rgba(4, 0, 50,1) 100%)'
                            : 'linear-gradient(0deg, #ffffff 30%,rgb(190, 226, 255) 100%)',
                        minHeight: '100vh',
                        margin: 0,
                        padding: 0,
                        transition: 'background 0.3s ease-in-out',
                    },
                }}
            />
        <Box sx={{
                position: 'fixed',
                right: '1rem',
                zIndex: 1000
            }}>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>}
              label='Mode'
            />
        </Box>
        {children}
    </ThemeProvider>
  )
}
