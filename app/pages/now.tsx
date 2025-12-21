import type { LoaderFunctionArgs } from "react-router-dom";
import { Footer } from "../components/footer";

import matter from "gray-matter";
import { marked } from "marked";
import { useLoaderData } from "react-router-dom";


export default function Now() {

    const { title, updated, html } = useLoaderData<typeof loader>();

    return (

        <main className="bg-[#0F0C1E]">

        <img src="/bg.png" draggable="false" className="bg-center absolute opacity-60 
            mask-[radial-gradient(ellipse_90%_50%_at_50%_45%,black_70%,transparent_100%)
            [-webkit-mask-image:radial-gradient(ellipse_90%_50%_at_50%_45%,black_70%,transparent_100%)]"
        style={{ objectFit: 'cover', width: '100%', height: '100vh' }}/>

        <div className="flex flex-col justify-center items-center">

            <div className="m-5 flex flex-col max-w-5xl mt-36">

            <div className="flex flex-row">
                <a href="/"><div className="z-10 w-24 mb-6 group relative hover:rotate-2">
                <img src="/catback.png" className="block group-hover:hidden"/>
                <img src="/catback-hover.png" className="hidden group-hover:flex group-hover:scale-105 transition"/>
                <p className="absolute top-9 left-10 text-white">back</p>
                </div></a>
            </div>

            <div className="border-3 border-white bg-gray-950/85 rounded-sm p-4 space-y-3 mt-4 relative text-sm md:text-base">
                <img src="/catemote1.png" className="absolute w-36 -top-30 right-12"/>


                <main className="max-w-3xl mx-auto p-8">
                    <h1 className="text-4xl font-bold mb-2">{title}</h1>

                    {updated && (
                        <p className="text-sm opacity-60 mb-6">
                        last updated {updated}
                        </p>
                    )}

                    <div
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    </main>



            </div>

            </div>

            < Footer />

        </div>
        
        </main>

    );
}

const nowMarkdown = await import("./now.md?raw");

export async function loader() {
  const markdown = await import("./now.md?raw").then(m => m.default);

  const { data, content } = matter(markdown);
  const html = marked(content);

  return {
    html,
    title: data.title ?? "Now",
    updated: data.updated
      ? new Date(data.updated).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null,
  };
}

