import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginProvider } from "./contexts/LoginContexts/LoginContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <LoginProvider>
      <App />
      </LoginProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
