import { Octokit } from "@octokit/core";

export function Footer() {
  return (

        <div className="p-4 space-y-3 mt-4 mx-5 text-center mb-4 z-10">
          <div className="flex flex-col justify-center items-center text-sm">
            <p className="text-[#FEE19F]">this site is still a wip!</p>
            <div className="flex flex-col md:flex-row md:space-x-4 justify-center items-center">
              <p>commit <a href={latestCommit.html_url} className="underline hover:decoration-wavy" target="_blank" rel="noopenner noreferrer">{latestCommit.hash}</a> on {latestCommit.date}</p>
              <div className="flex flex-row space-x-4 justify-center items-center">
                <img src="/smallcat.png" className="h-4 w-7"/> 
                <p>made by acon [<a href="https://github.com/acornitum/sitev6" className="underline hover:decoration-wavy" target="_blank" rel="noopenner noreferrer">repo</a>] <span className="opacity-50">[<a href="https://2024.aconlin.com" className="underline hover:decoration-wavy" target="_blank" rel="noopenner noreferrer">2024</a>]</span></p>
              </div>
            </div>
          </div>  
        </div>

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