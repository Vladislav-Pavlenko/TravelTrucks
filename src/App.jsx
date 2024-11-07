import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CampersPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage.jsx"));
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersPage />} />
        <Route path="/catalog/:id" element={<CamperPage />} />
      </Routes>
    </Layout>
  );
}
