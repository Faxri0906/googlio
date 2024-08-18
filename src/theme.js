import { createTheme } from "@mui/material";
import { indigo, grey } from "@mui/material/colors";
const theme = createTheme({
    palette: {
        primary: {
            light: indigo["400"],
            main: indigo["500"],
            dark: indigo["600"],
        },
        secondary: {
            light: grey["50"],
            main: grey["800"],
            dark: grey["900"],
        },
    },
    typography: {
        fontFamily: ["Inter"],
    },
    spacing: 4,
    breakpoints: {
        values: {
          xs: 0,
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1280,
          dop: 1200,
        },
    },
});
export default theme;