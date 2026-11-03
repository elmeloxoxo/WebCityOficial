import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WebCity — Estudio digital de Iquitos",
    short_name: "WebCity",
    description: site.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f7fbf9",
    theme_color: "#04120f",
    lang: "es-PE",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
