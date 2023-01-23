import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Router } from "./router";
import { ChurrasProvider } from "./store/ChurrasProvider";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ChurrasProvider>
          <Router />
        </ChurrasProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
