import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Octokit } from "@octokit/core";

export function Welcome() {
  return (
    <main className="">

      <img src="/bg2.png" className="bg-center absolute opacity-60 -z-20"
      style={{ objectFit: 'cover', width: '100%', height: '100vh' }}/>

      <div className="flex flex-col justify-center items-center">



        <div className="m-5 max-w-3xl flex flex-col">
          <div className="flex flex-row">
            <img src="/aconpfp.png" className="border-white rounded-sm border-3 w-24 z-10 md:mt-8"/>





            {/*<div className="flex flex-row space-x-7 ml-auto mt-auto mb-2 mr-2">
              <a href="https://github.com/acornitum" target="_blank" rel="noopenner noreferring" className="rotate-45 bg-[#201840] shadow-purple-400 hover:shadow-[0_0_10px] transition w-12 h-12 flex justify-center items-center relative">
                <img src="/ghlogo.svg" className="-rotate-45 top-2.5 left-2.5 absolute"/>
              </a>
              <a href="https://www.instagram.com/a.con.itum/" target="_blank" rel="noopenner noreferring" className="rotate-45 bg-[#201840] shadow-purple-400 hover:shadow-[0_0_10px] transition w-12 h-12 flex justify-center items-center">
                <img src="/instalogo.svg" className="-rotate-45"/>
              </a>
            </div>*/}

            <div className="flex flex-row space-x-7 ml-auto mt-auto mb-2 mr-2">
              <a href="https://github.com/acornitum" target="_blank" rel="noopenner noreferring" className="rotate-45 bg-[#FFD16A] border-3 border-white rounded-xs shadow-purple-400 hover:shadow-[0_0_10px] transition w-10 h-10 flex justify-center items-center hover:scale-105">
                <img src="/ghorange.svg" className="-rotate-45 w-7"/>
              </a>
              <a href="https://www.instagram.com/a.con.itum/" target="_blank" rel="noopenner noreferring" className="rotate-45 bg-[#FFB2AB] border-3 border-white rounded-xs shadow-purple-400 hover:shadow-[0_0_10px] transition w-10 h-10 flex justify-center items-center hover:scale-105">
                <img src="/instapink.svg" className="-rotate-45 w-6.5"/>
              </a>
            </div>







          </div>
          

          <div className="border-3 border-white bg-gray-950/85  rounded-sm p-4 max-w-xl space-y-3 mt-4 relative">
            <p><span className="text-blue-400 font-bold">acon</span>: hi! i’m a 19-year-old from waterloo, canada :3 </p>
            <p>i currently run programs + events @ <a href="https://hackclub.com/" className="text-[#FEE19F]" target="_blank" rel="noopenner noreferrer">hack club</a>! i’m also a first year student @ university of waterloo.</p>
            <p>some hobbies include:</p>
            <ul className="list-disc pl-6 text-sm">
              <li>hardware projects!!! ({"<3"} kicad + fusion)</li>
              <li>design + art stuff - see me irl? ask me for a sticker!</li>
              <li>debate! i love yapping,,, </li>
              
            </ul>

            <img src="/downarrow.svg" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bobble"/>

          </div>

        </div>

        <img src="/cat.png" className="w-96 my-12 hover:scale-101 transition"/>


        <div className="border-3 border-white bg-gray-950/85  rounded-sm p-4 max-w-xl space-y-3 mt-4 relative mx-5 text-sm">
          <p>after graduating high school june 2024, i took a gap year! i spent a year in vermont to build things @ hack club.</p>
          <p>here are a couple of things i've worked on:</p>
          <p><a href="https://undercity.hackclub.com/" className="text-[#FEE19F]" target="_blank" rel="noopenner noreferrer">undercity</a>: a 4-day hardware hackathon @ github hq</p>
          <p><a href="https://solder.hackclub.com/" className="text-[#FEE19F]" target="_blank" rel="noopenner noreferrer">solder</a>: learn how to make your first first pcb</p>


        </div>

        <div className="mt-44"></div>



        <div className="p-4 max-w-xl md:w-xl space-y-3 mt-4 mx-5 text-center mb-4">
          <div className="flex flex-col justify-center items-center text-sm">
            <p>commit <a href={latestCommit.html_url} className="underline hover:decoration-wavy" target="_blank" rel="noopenner noreferrer">{latestCommit.hash}</a> on {latestCommit.date} // made by acon (<a href="https://github.com/acornitum/sitev6" className="underline hover:decoration-wavy" target="_blank" rel="noopenner noreferrer">repo</a>)</p>
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