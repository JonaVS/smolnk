import { Route, Routes } from "react-router-dom";
import UrlShortener from "../pages/UrlShortener";
import UrlUsageCount from "../pages/UrlUsageCount";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UrlShortener />} />
      <Route path="/url-usage" element={<UrlUsageCount />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
