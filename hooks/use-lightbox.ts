"use client";

import { useCallback, useEffect, useState } from "react";

export function useLightbox<T>(items: T[]) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] ?? null : null;
  const isOpen = selectedIndex !== null;

  const open = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const close = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const next = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || items.length === 0) return null;
      return (prev + 1) % items.length;
    });
  }, [items.length]);

  const prev = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || items.length === 0) return null;
      return (current - 1 + items.length) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowRight") {
        next();
      } else if (event.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  return {
    selectedIndex,
    selectedItem,
    isOpen,
    open,
    close,
    next,
    prev,
  };
}
