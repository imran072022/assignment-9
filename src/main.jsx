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
        element: <GameDetails></GameDetails>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GamesProvider>
      <RouterProvider router={router}></RouterProvider>
    </GamesProvider>
  </StrictMode>
);
