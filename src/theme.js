// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Poppins, sans-serif',
          width: '100%',
          height: '100%',
          margin: 0,
        },
        html: {
          width: '100%',
          height: '100%',
          margin: 0,
          overflowX: "hidden"
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0, //  => 0px and up
      sm: 425, // => 425px and up
      ss: 768, // => 600px and up
      md: 960, // => 960px and up
      lg: 1280, // => 1280px and up
    },
  },
});

export default theme;
