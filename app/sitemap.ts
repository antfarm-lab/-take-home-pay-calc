import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://take-home-pay-calc.vercel.app/",

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 1,
    },
  ];
}