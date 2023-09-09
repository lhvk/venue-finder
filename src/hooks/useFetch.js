import { useEffect, useState } from "react";

export function useFetch(url, uploadData = undefined, token = undefined) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      const fetchOptions = {
        method: uploadData ? "POST" : "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: uploadData ? JSON.stringify(uploadData) : undefined,
      };

      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url, fetchOptions);
        const responseData = await response.json();

        setData(responseData);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url, uploadData, token]);
  return { data, isLoading, isError };
}
