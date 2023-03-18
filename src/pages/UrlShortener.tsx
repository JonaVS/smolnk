import { useEffect } from "react"
import ShortenerSection from "../components/ShortenerSection/ShortenerSection"

const UrlShortener = () => {
  useEffect(() => {
    document.title = "Home | Shortener";
  }, []);

  return <ShortenerSection />;
};

export default UrlShortener;