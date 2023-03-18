import { useEffect } from "react"
import UrlUsageSection from "../components/UrlUsageSection/UrlUsageSection";

const UrlUsageCount = () => {
  useEffect(() => {
    document.title = "URL usage count";
  }, []);

  return <UrlUsageSection/>
};

export default UrlUsageCount;