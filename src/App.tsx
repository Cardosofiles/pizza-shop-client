import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Controle Financeiro" />
      <RouterProvider router={router} />;
    </HelmetProvider>
  );
}
