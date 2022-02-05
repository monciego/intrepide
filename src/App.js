import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <Navbar />
          <Hero />
          <Program />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
