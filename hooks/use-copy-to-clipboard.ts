"use client";

import { useCallback, useState } from "react";

export function useCopyToClipboard(timeout = 2000) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        console.warn("Clipboard not supported");
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopiedValue(text);

        setTimeout(() => {
          setCopiedValue((current) => (current === text ? null : current));
        }, timeout);

        return true;
      } catch (error) {
        setCopiedValue(null);
        return false;
      }
    },
    [timeout],
  );

  const isCopied = useCallback(
    (text: string) => copiedValue === text,
    [copiedValue],
  );

  return { copiedValue, copy, isCopied };
}
