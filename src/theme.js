import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#004177",
            dark: "#002f4f",
            light: "#3a6680",
            contrastText: "#ffffff"
            
        },
        secondary: {
            main: "#00a4ca"
        },
        relaxed: {
            main: "#57a52d",
            contrastText:"#ffffff"
        },
        black: {
            main: "#000000"
        },
        white: {
            main: "#ffffff"
        },
        grey: {
            main: "#777779"
        }
    },
    typography: {
        fontFamily: "Montserrat",
    }
});

export default theme;