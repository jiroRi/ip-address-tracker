import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1>Hello</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
