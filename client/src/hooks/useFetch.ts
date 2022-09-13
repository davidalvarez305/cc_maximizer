import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: "" });

  const makeRequest = async (
    config: AxiosRequestConfig,
    callback: (data: AxiosResponse) => void
  ) => {
    setIsLoading(true);
    setError({ message: "" });

    await axios({
      url: config.url,
      method: config.method ? config.method : undefined,
      headers: config.headers ? config.headers : undefined,
      responseType: config.responseType ? config.responseType : undefined,
      withCredentials: true,
      data: config.data ? config.data : null,
    })
      .then((response) => {
        setIsLoading(false);
        callback(response);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setIsLoading(false);
          setError({ message: error.response.data.data });
        } else {
          setIsLoading(false);
          setError({ message: error.message });
        }
      });
  };

  const errorCallback = (callbackMessage: string) => {
    setError({ message: callbackMessage });
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    makeRequest,
    errorCallback,
  };
}
