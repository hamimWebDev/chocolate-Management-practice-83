import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddChocolates from "./components/AddChocolates/AddChocolates";
import UpdateChocolates from "./components/UpdateChocolates/UpdateChocolates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/chocolates"),
  },
  {
    path: "/addChocolates",
    element: <AddChocolates></AddChocolates>,
  },
  {
    path: "/updateChocolates",
    element: <UpdateChocolates></UpdateChocolates>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
