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
        },
        background: {
            default: '#050a30', //deep blue
            paper: '#000'
        },
        text: {
            primary: '#7ec8e3',
        }
    }
})