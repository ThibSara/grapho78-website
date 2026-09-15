import { MetadataRoute } from "next";
import PAGES_NAMES from "./constants/PAGES_NAMES";

const baseUrl = "https://grapho78.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGES_NAMES).map((page) => ({
    url: `${baseUrl}${page.href === "/" ? "" : page.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.href === "/" ? 1 : 0.8,
  }));
}
