import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Context from "./utilis/Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Context>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Context>
);
