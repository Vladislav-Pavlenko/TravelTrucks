import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/HomePage"));
const CamperPage = lazy(() => import("./pages/HomePage"));
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CamperPage />} />
    </Routes>
  );
}
