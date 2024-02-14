import { useState, useEffect, useCallback } from "react";

const getSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export function useResize() {
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  );

  const handleResize = useCallback(() => {
    let ticking = false;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setSize(getSize());
        ticking = false;
      });
      ticking = true;
    }
  }, []);

  useEffect(() => {
    setSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
