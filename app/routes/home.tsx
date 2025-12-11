import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "acon" },
    { name: "description", content: "acon's personal site, v6 >:3" },
    { image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a6516069cfbf33fb9e2db96b4d768d0abd0825e2_personalsite.png"}
  ];
}

export default function Home() {
  return <Welcome />;
}
