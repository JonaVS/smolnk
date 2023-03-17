import axios, { AxiosResponse } from "axios";
import { ShortenerFormValues, Url, UrlUsageCount } from "../models/Url";

const response = <T>(response: AxiosResponse<T>) => response.data;
axios.defaults.baseURL = import.meta.env.VITE_SHORTENER_API_BASE_URL;

/*-----DEV MODE ONLY CODE START-----*/
//This is just to simulate some dalay of requests on development
if (import.meta.env.DEV) {
  const sleep = (delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, delay);
    });
  };

  axios.interceptors.request.use(async (response) => {
    await sleep(500);
    return response;
  });
}
/*-----DEV MODE ONLY CODE END-----*/

const url = {
  shortenUrl: (body: ShortenerFormValues) => axios.post<Url>("/shortener", body).then(response),
  getUrlUsageCount: (shortUrl: string) => axios.get<UrlUsageCount>(`/usageCount/${shortUrl}`).then(response),
};

const apiAgent = {
  url,
};

export default apiAgent;
