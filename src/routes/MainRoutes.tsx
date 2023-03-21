import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import UrlShortener from "../pages/UrlShortener";
import UrlUsageCount from "../pages/UrlUsageCount";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<UrlShortener />} />
        <Route path="/url-usage" element={<UrlUsageCount />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
