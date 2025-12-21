import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("pictures", "pages/pictures.tsx"),
  route("blog/:slug", "blog.tsx"),
] satisfies RouteConfig;

