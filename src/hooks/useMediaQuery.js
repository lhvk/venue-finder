import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatches = (event) => {
      setMatches(event.matches);
    };

    // Initial check
    updateMatches(media);

    const mediaQueryListener = (event) => {
      updateMatches(event);
    };

    media.addEventListener("change", mediaQueryListener);

    // Clean up the listener
    return () => {
      media.removeEventListener("change", mediaQueryListener);
    };
  }, [query]);

  return matches;
}
