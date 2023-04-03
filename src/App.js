import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import usePersistedState from "./utils/usePersistedState";
import light from "./style/themes/light";
import dark from "./style/themes/dark";
import GlobalStyles from "./style/themes/global";
import Nav from "./components/header/Nav";
import Links from "./route/Links";
const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div
          className="App"
          style={{
            background: `${theme.background}`,
          }}
        >
          <div className="container">
            <Router>
              <ToastContainer />
              <GlobalStyles />
              <Nav toggleTheme={toggleTheme} />
              <Links />
            </Router>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
};
export default App;
