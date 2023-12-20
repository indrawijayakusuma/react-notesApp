import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import ThemeContextProvider from "./context/Theme";
import LocaleContextProvider from "./context/Locale";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <LocaleContextProvider>
          <App />
        </LocaleContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
