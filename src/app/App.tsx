import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '@styles/global.styles';

import { store } from "./store";
import Router from "./Router";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
