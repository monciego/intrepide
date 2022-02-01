import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <Navbar />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
