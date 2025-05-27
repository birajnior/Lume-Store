import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { BrowserRouter } from "react-router-dom";
import { CategoriasBar } from "./components/Categorias/Categorias.jsx";
import Header from "./components/Header/header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <CategoriasBar />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
