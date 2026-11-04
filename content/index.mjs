import { home } from "./home.mjs";
import { pillar } from "./pillar.mjs";
import { guide } from "./guide.mjs";
import { services } from "./services.mjs";
import {
  pricing,
  freeTrial,
  segments,
  contact,
  notFound,
  privacy,
  about,
} from "./institutional.mjs";
import { blogIndex, posts } from "./blog.mjs";
import { metricPosts } from "./blog-metricas.mjs";
import { landingTrial } from "./lp.mjs";

export const pages = [
  home,
  pillar,
  guide,
  ...services,
  pricing,
  freeTrial,
  segments,
  about,
  contact,
  blogIndex,
  ...posts,
  ...metricPosts,
  privacy,
  notFound,
  // Landing pages de campanha (noindex, fora do sitemap)
  landingTrial,
];
