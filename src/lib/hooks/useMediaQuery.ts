import { useEffect, useState } from "react";

type LegacyMediaQueryList = MediaQueryList & {
  addListener: (
    listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void,
  ) => void;
  removeListener: (
    listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void,
  ) => void;
};

export const useMediaQuery = (query: string): boolean => {
  const getInitial = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState<boolean>(getInitial);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Set initial state and subscribe
    setMatches(mql.matches);

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }

    // Fallback for older browser types
    const legacy = mql as LegacyMediaQueryList;
    if (typeof legacy.addListener === "function") {
      legacy.addListener(handler);
      return () => legacy.removeListener(handler);
    }

    return undefined;
  }, [query]);

  return matches;
};

