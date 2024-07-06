import { ErrorPage, MainPage, UserListPage, UserPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <div>Auth Page</div>,
  },
  {
    path: "/users",
    element: <UserListPage />,
    children: [],
  },
  {
    path: "users/:userId",
    element: <UserPage />,
  },
]);
