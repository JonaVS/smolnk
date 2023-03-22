import { useState } from "react";
import { Result } from "../types/Result";
import { getApiError } from "../utils/errorExtractor";

type UseApiFormParam<T, Q> = {
  initialValues: T;
  cleanOnSuccess?: boolean
  onSubmit: (values: T) => Promise<Q>;
};

export const useApiForm = <T extends {}, Q>({ initialValues, onSubmit, cleanOnSuccess = true }: UseApiFormParam<T, Q>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [apiResult, setApiResult] = useState<Result<Q>>({data: null, error: null});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setApiResult({ data: null, error: null });
    try {
      const result = await onSubmit(values);
      setApiResult({ data: result, error: null });
      if (cleanOnSuccess) setValues(initialValues);
    } catch (error) {
      setApiResult({ data: null, error: getApiError(error) });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    apiResult,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
