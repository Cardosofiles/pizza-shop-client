import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "@/routes/404";
import { AppLayout } from "@/routes/_layouts/app";
import { AuthLayout } from "@/routes/_layouts/auth";
import { Dashboard } from "@/routes/app/dashboard/dashboard";
import { Orders } from "@/routes/app/orders/orders";
import { SignIn } from "@/routes/auth/sign-in";
import { SignUp } from "@/routes/auth/sign-up";
import { Error } from "@/routes/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
