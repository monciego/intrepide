import React from "react";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <Navbar />
          <Hero />
          <Program />
          <About />
          <Benefits />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
