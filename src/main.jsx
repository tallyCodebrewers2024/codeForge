import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home/index.jsx";
import SignInPage from "./auth/sign-in/index.jsx";
import Problems from "./problems/index.jsx";
import ProblemPage from "./problems/[problemId]/index.jsx";
import Contests from "./contests/index.jsx";
import SignUpPage from "./auth/sign-up/index.jsx";
import ContestPage from "./contests/[contestId]/index.jsx";
import AddProblemPage from "./problems/add/index.jsx";
import Playground from "./playground/index.jsx";
import AddContestPage from "./contests/add/index.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/problems",
        element: <Problems />,
      },
      {
        path: "/problems/:problemId",
        element: <ProblemPage />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      {
        path: "/contests",
        element: <Contests />,
      },
      {
        path: "/contests/:contestId",
        element: <ContestPage />,
      },
      {
        path: "/problems/:problemId",
        element: <ProblemPage />,
      },
      {
        path: "/problems/add",
        element: <AddProblemPage />,
      },
      {
        path: "/contests/add",
        element: <AddContestPage />,
      },
      {
        path: "/auth/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
