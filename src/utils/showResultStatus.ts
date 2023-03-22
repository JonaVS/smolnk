import { Result } from "../types/Result";

export const shouldShowResultStatus = (result:Result<any>, isLoading:boolean) => {
  return (result.data || result.error) || isLoading;
}