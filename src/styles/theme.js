import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkblue1: "#364780",
    darkblue2: "#415091",
    darkblue3: "#2f3c75",
    darkblue4: "#18285c",
    lightblue1: "#9ebdff",
    lightblue2: "#7e97cc",
    gray1: "#797d80",
    gray2: "#6b6f73",
    gray3: "#585b5e",
    white1: "#f7fbff",
    white2: "#f2f4f5",
    black1: '#333333'
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;