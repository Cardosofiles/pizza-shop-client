import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/routes/_layouts/app";
import { AuthLayout } from "@/routes/_layouts/auth";
import { Dashboard } from "@/routes/app/dashboard";
import { SingIn } from "@/routes/auth/sing-in";
import { SingUp } from "@/routes/auth/sing-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sing-in", element: <SingIn /> },
      { path: "/sing-up", element: <SingUp /> },
    ],
  },
]);
