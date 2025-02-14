import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#7ec8e3', //navy blue,
            secondary: '#0000ff' //blue
        },
        background: {
            default: '#fcfcfc', //almost white
            paper: '#fff',
            card:'#e4efff'
        },
        text: {
            primary: '#050a30', //deep blue
            secondary: '#FFF' //white for dark backgrounds on card
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#adb4ff', //lightest blue
            secondary: '#7ec8e3', //light blue
            error: '#D22B2B'
        },
        background: {
            default: 'linear-gradient(135deg, #050a30 30%, #7ec8e3 100%)',
            // default: '#040273',
            paper: '#040273',
            card: '#00134c',
        },
        text: {
            primary: '#FFF',
            secondary: '#fff'
        }
    }
})