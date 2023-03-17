import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import UrlUsageSection from "../components/UrlUsageSection/UrlUsageSection";
import ShortenerSection from "../components/ShortenerSection/ShortenerSection";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<ShortenerSection />} />
        <Route path="/link-usage" element={<UrlUsageSection/>} />
        <Route path="/*" element={<div className="m-auto font-extrabold text-xl text-white">404 page will go here!</div>} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;