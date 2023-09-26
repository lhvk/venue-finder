import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

        if (!response.ok) throw new Error();

        setData(responseData);
      } catch (error) {
        toast.error(`${error}`, { position: "bottom-right" });
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url, uploadData, token]);
  return { data, isLoading, isError };
}
