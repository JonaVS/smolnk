import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import UrlShortener from "../pages/UrlShortener";
import UrlUsageCount from "../pages/UrlUsageCount";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<UrlShortener/>} />
        <Route path="/url-usage" element={<UrlUsageCount/>} />
        <Route path="/*" element={<PageNotFound/>} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;