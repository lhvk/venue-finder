import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useFetchWithPagination(url, limit = 20, initialOffset = 0) {
  const [venuesData, setVenuesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [offset, setOffset] = useState(initialOffset);

  const loadMoreData = () => {
    setOffset(offset + limit);
  };

  useEffect(() => {
    async function fetchData() {
      const fetchUrl = `${url}?offset=${offset}&limit=${limit}`;

      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(fetchUrl);

        const data = await response.json();

        if (!response.ok) throw new Error(data.errors[0].message);

        setVenuesData((prevVenuesData) =>
          offset === 0 ? data : [...prevVenuesData, ...data]
        );
      } catch (error) {
        toast.error(`${error}`, { position: "bottom-right" });
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, offset, limit]);

  return { venuesData, isLoading, isError, loadMoreData };
}
