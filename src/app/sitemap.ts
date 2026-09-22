import type { MetadataRoute } from "next";
import { notes } from "@/lib/journal";
import { site } from "@/lib/site";
import { cases } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/approach", "/engage", "/contact", "/lookbook", "/journal"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    }),
  );
  const work = cases.map((item) => ({
    url: `${site.url}/work/${item.slug}`,
    lastModified: new Date(),
  }));
  const journal = notes.map((note) => ({
    url: `${site.url}/journal/${note.slug}`,
    lastModified: new Date(),
  }));
  return [...routes, ...work, ...journal];
}
