import { useEffect } from "react"
import NotFoundSection from "../components/NotFoundSection/NotFoundSection";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Not found | 404";
  }, []);

  return <NotFoundSection/>
};

export default PageNotFound;