import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../public/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Account from "./pages/Account";
import AuthGuard from "./services/AuthGuard";
import Error from "./pages/Error";
import AuthRouter from "./services/AuthRouter";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/account/*"
              element={
                <AuthGuard>
                  <Account />
                </AuthGuard>
              }
            />
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
