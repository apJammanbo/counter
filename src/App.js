import React from "react";
import Counter from "./Pages/Counter";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";

/**
 * App : Counter App의 메인입니다.
 */
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Counter />
      </>
    </ThemeProvider>
  );
};

export default App;
