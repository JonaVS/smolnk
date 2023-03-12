import { AxiosError } from "axios";

type ShortenerApiError = {
  errors: string[];
};

export const getApiError = (error: any): string => {
  //This is a default error.
  let errorMessage = "An error ocurred. Please try again.";
  
  const axiosError = error as AxiosError<ShortenerApiError>;
  if (axiosError.response?.data.errors) {
    //The backend sends an array of errors. For the current features, is ok to just extract the first one. 
    errorMessage = axiosError.response?.data.errors[0];
  }

  return errorMessage;
};