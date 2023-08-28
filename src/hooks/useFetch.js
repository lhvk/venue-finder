import { useEffect, useState } from "react";

export function useFetch(url, uploadData = undefined) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const fetchOptions = uploadData
          ? fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(uploadData),
            })
          : fetch(url);

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
  }, [url, uploadData]);
  return { data, isLoading, isError };
}
