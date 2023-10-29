import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import React from "react";

const theme = extendTheme({
  fonts: {
    heading: `'Playpen Sans', cursive`,
    body: `'Playpen Sans', cursive`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#435334",
        color: "#FAF1E4",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
