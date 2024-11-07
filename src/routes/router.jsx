import { createBrowserRouter, Navigate } from "react-router-dom";
import TestsLayout from "../Layout/TestsLayout";
import { Login } from "../components/UI/Login";
import { NewTodoForm } from "../components/UI/NewTodoForm";
import { NewFormRequest } from "../components/UI/NewFormRequest";
import TestsList from "../components/UI/TestsList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TestsLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/login"} />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "/main",
        element: <NewTodoForm />,
      },
      {
        path: "/new-questions",
        element: <NewFormRequest />,
      },
      {
        path: "/Tests",
        element: <TestsList />,
      },
    ],
  },
]);
