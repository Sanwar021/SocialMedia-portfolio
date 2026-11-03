import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./astra.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const GamesPage = lazy(() => import("./pages/GamesPage"));

function PageLoader() {
  return <div className="page-loader" role="status" aria-label="Loading page"><span>SI</span></div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="research" element={<ResearchPage />} />
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="games" element={<GamesPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
