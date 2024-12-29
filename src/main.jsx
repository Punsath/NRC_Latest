import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { ContextProvider } from "./components/contexts/NavigationContext.jsx";

import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
);
