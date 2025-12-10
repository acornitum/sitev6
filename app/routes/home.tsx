import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "acon" },
    { name: "description", content: "acon's personal site, v6 >:3" },
  ];
}

export default function Home() {
  return <Welcome />;
}
