"use client";

import { useEffect, useState } from "react";

import Aurora, { type AuroraProps } from "@/components/react-bits-aurora";

type ThemeAwareAuroraProps = Omit<AuroraProps, "lightMode">;

export function ThemeAwareAurora(props: ThemeAwareAuroraProps) {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setLightMode(root.dataset.theme === "light");
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return <Aurora {...props} lightMode={lightMode} />;
}
