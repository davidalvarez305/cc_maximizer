import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import UserProvider from "./context/UserContext";
import "./global.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import "./styleguide.css";
import ProfileSettings from "./screens/ProfileSettings";
import ChangePassword from "./screens/ChangePassword";
import ProfilePicture from "./screens/ProfilePicture";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/profile-picture" element={<ProfilePicture />} />
          </Routes>
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
