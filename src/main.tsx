import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainRoutes from "./routes/MainRoutes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <MainRoutes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);