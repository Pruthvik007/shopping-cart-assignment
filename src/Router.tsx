import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import BackDrop from "./components/common/BackDrop.tsx";
import { useUser } from "./hooks/useUser.ts";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage.tsx";
import { BASE_URL } from "./constants/Config.ts";
const PageNotFound = React.lazy(() => import("./pages/PageNotFound.tsx"));

const Router = () => {
  const { user } = useUser();
  return (
    <BrowserRouter>
      {user && <NavBar />}
      <Routes>
        {user && (
          <Route
            path={BASE_URL}
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
