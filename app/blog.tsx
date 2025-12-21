import { marked } from "marked";
import { useLoaderData } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import matter from "gray-matter";
import { Footer } from "./components/footer";

// import all markdown files at build time
const posts = import.meta.glob("/app/posts/*.md", {
  query: '?raw', 
  import: 'default',
  eager: true,
});

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  const path = `/app/posts/${slug}.md`;

  const markdown = posts[path];
  if (!markdown) {
    throw new Response("Not Found", { status: 404 });
  }

  const { data, content } = matter(markdown);

  const html = marked(content);

  return {
    html,
    title: data.title ?? slug,
    date: data.date 
        ? new Date(data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            })
        : null,
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
}

export default function BlogPost() {
  const { html, title, date, tags } = useLoaderData<typeof loader>();

  return (
    <main className="">
        
        
        <div className="flex flex-col justify-center items-center bg-[#1E1F2A]">
            <div className="mt-16 mx-5">
                <a href="/"><img src="/catback.png" className="w-24"/></a>
                <article className="max-w-6xl">
                    <div className="my-10">
                        <h1 className="mb-2 text-4xl font-bold">{title}</h1>
                        <div className="flex flex-row items-center">
                            <p className="mr-4">{date}</p> <img src="/smallcat.png" className="h-4 w-7 mr-4"/> <p>acon</p> 
                        </div>
                        <div className="mt-4">
                            {tags.length > 0 && (
                                <ul className="flex flex-wrap gap-2 mb-6">
                                {tags.map((tag) => (
                                    <li
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded bg-gray-600 text-gray-200"
                                    >
                                    {tag}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                        <hr className="mt-10 border-[#414586] border-2"/>
                        
                    </div>
                    

                    <div
                    className="prose prose-invert max-w-none markdown"
                    dangerouslySetInnerHTML={{ __html: html }}
                    />

                    <hr className="mt-12 border-[#414586] border-2"/>
                </article>
            </div>

            <div className=""><Footer/></div>
            
        </div>
    </main>
  );
}

