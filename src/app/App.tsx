import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Router from "./Router";
import { GlobalStyles, theme } from '../shared/styles/global.styles';
import { ThemeProvider } from 'styled-components';

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
