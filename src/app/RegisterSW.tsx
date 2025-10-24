"use client";
import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const register = async () => {
        try {
          await navigator.serviceWorker.register("/sw.js", { scope: "/" });
        } catch (e) {
          console.warn("SW register failed", e);
        }
      };
      // PWA install prompt (optionnel)
      window.addEventListener("load", register);
    }
  }, []);
  return null;
}
