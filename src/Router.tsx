import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackDrop from "./components/common/BackDrop.tsx";
import { useUser } from "./hooks/useUser.ts";
import NavBar from "./components/NavBar.tsx";
const PageNotFound = React.lazy(() => import("./pages/PageNotFound.tsx"));
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage.tsx";

const Router = () => {
  const BaseUrl = "shopping-cart-assignment";
  const { user } = useUser();
  return (
    <BrowserRouter>
      {user && <NavBar />}
      <Routes>
        {user && (
          <Route
            path={BaseUrl}
            element={
              <Suspense fallback={<BackDrop />}>
                <HomePage />
              </Suspense>
            }
          />
        )}
        {!user && (
          <Route
            path="/*"
            element={
              <Suspense fallback={<BackDrop />}>
                <LoginPage />
              </Suspense>
            }
          />
        )}
        <Route
          path="/*"
          element={
            <Suspense fallback={<BackDrop />}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
