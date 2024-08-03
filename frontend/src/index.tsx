import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { lightTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
