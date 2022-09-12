import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import UserProvider from "./context/UserContext";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
);
