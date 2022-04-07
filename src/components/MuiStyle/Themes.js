import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme ({
    palette: {
        primary: {
            main: "#607d8b",
            light:"#b3e5fc",
            dark: "#37474f",
        },    
        secondary: {
            main: "#d500f9",
            light:"#ce93d8",
            dark: "#9500ae",
        }    
    }
})

export default theme;