import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@chakra-ui/core";
import App from "./App";

const appRoot = document.getElementById("app");

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  appRoot
);
