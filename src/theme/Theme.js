import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000c66', //navy blue,
            secondary: '#0000ff' //blue
        },
        background: {
            default: '#fcfcfc', //almost white
            paper: '#fff'
        },
        text: {
            primary: '#050a30', //deep blue
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
            paper: '#040273'
        },
        text: {
            primary: '#FFF',
            secondary: '#040273'
        }
    }
})