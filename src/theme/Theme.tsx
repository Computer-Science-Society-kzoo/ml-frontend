import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { ReactElement } from "react";

const customTheme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1660,
      xl: 1920,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
  },
});

export const Theme = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
