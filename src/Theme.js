import { ThemeProvider } from "styled-components";

const coolTheme = {
  colors: {
    darkBackground: "#222",
    lightBackground: "#444",
    brightTxt: "#fff",
    dullTxt: "#ddd",
  },
  fonts: ["Roboto", "sans-serif"],
  fontSizes: {
    xsmall: "0.8rem",
    small: "1.0rem",
    medium: "1.5rem",
    large: "3rem",
    xlarge: "4.5rem",
  },
  fontWeights: {
    light: 100,
    normal: 300,
    bold: 500,
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={coolTheme}>{children}</ThemeProvider>;
}
