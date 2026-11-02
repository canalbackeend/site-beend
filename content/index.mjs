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
  privacy,
  notFound,
];
