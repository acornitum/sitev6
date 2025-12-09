import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Octokit } from "@octokit/core";

export function Welcome() {
  return (
    <main className="">

      <img src="/bg.png" className="bg-center absolute opacity-40 -z-20"
      style={{ objectFit: 'cover', width: '100%', height: '100vh' }}/>

      <div className="flex flex-col justify-center items-center">



        <div className="m-5 max-w-3xl flex flex-col">
          <img src="/aconpfp.png" className="border-white rounded-sm border-3 w-24 z-10 md:mt-8"/>

          <div className="border-3 border-white bg-gray-950/85  rounded-sm p-4 max-w-xl space-y-3 mt-4 relative">
            <p><span className="text-blue-400 font-bold">acon</span>: hi! i’m a 19-year-old from waterloo, canada :3 </p>
            <p>i currently run programs + events @ <a href="https://hackclub.com/" className="text-[#FEE19F]">hack club</a>! i’m also a first year student @ university of waterloo.</p>
            <p>some hobbies include:</p>
            <ul className="list-disc pl-6">
              <li>hardware projects!!!</li>
              <li>design + art stuff</li>
              <li>debate!</li>
              
            </ul>

            <img src="/downarrow.svg" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bobble"/>

          </div>

        </div>

        <div className="relative">
          {/*<img src="/grass.svg" className="w-[100vw]"/>*/}
          <img src="/cat.png" className="absolute bottom-36 left-24 w-72"/>
        </div>




        <div className="border-3 border-white bg-gray-950/85  rounded-sm p-4 w-xl space-y-3 mt-4">
          <div className="flex flex-col justify-center items-center">
            <p>commit <a href={latestCommit.html_url} className="underline hover:decoration-wavy">{latestCommit.hash}</a> on {latestCommit.date} // made by acon</p>
          </div>  
        </div>



      </div>
      
    </main>
  );
}

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_API_KEY,
});

export async function getLatestCommit() {
  const res = await octokit.request(
    "GET /repos/acornitum/sitev6/commits",
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  const commitDate = new Date(res.data[0].commit.author.date);
  const optionsMonthDayYear = { year: 'numeric', month: 'long', day: 'numeric' };

  return {
    hash: res.data[0].sha.slice(0, 7),
    html_url: res.data[0].html_url,
    date: commitDate.toLocaleDateString("en-US", optionsMonthDayYear),
  };
}

const latestCommit = await getLatestCommit();