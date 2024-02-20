import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./components/Home/home.tsx"; // Change 'home' to 'Home' to follow conventional naming
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout1 from "./components/Layout1.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout1></Layout1>}>
      <Route path="" element={<Home></Home>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
