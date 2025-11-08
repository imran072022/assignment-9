import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layouts/RootLayout";
import Page404 from "./Pages/Page404";
import HomePage from "./Pages/HomePage";
import Games from "./Pages/Games";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import GamesProvider from "./Contexts/GamesProvider";
import GameDetails from "./Pages/GameDetails";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute";
import ForgotPassword from "./Pages/ForgotPassword";
import { Toaster } from "react-hot-toast";
import MyProfile from "./Pages/MyProfile";
import UpdateProfile from "./Pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Page404></Page404>,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "games",
        element: <Games></Games>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "game-details/:id",
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <GamesProvider>
        <>
          <RouterProvider router={router} />
          <Toaster position="top-center" reverseOrder={false} />
        </>
      </GamesProvider>
    </AuthProvider>
  </StrictMode>
);
