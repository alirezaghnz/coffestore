import { useEffect } from "react";

export default function useClickOutside<T extends Element>(
  ref: React.RefObject<T | null>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOut = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [ref, callback]);
}
