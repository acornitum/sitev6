import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main className="bg-[#0F0C1E]">


      <img src="/bg.png" draggable="false" className="bg-center absolute opacity-60 
        mask-[radial-gradient(ellipse_90%_50%_at_50%_45%,black_70%,transparent_100%)
        [-webkit-mask-image:radial-gradient(ellipse_90%_50%_at_50%_45%,black_70%,transparent_100%)]"
      style={{ objectFit: 'cover', width: '100%', height: '100vh' }}/>

      <div className="flex flex-col justify-center items-center">



        <div className="m-5 max-w-3xl flex flex-col">
          <div className="flex flex-row">
            <img src="/aconpfp.png" className="border-white rounded-sm border-3 w-24 z-10 md:mt-8"/>

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

            <img src="/downarrow.svg" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bobble"/>

          </div>

          <div className="border-3 border-white bg-gray-950/85  rounded-sm p-4 max-w-xl space-y-3 mt-12 relative">
            <img src="/catemote1.png" className="w-28 absolute right-4 -top-6 hover:scale-105 transition"/>
            <p>some hobbies include:</p>
          </div>

          <div className="flex flex-wrap mt-8 space-x-2 space-y-2 md:space-y-0 justify-center items-center text-center">
            <div className="border-white border-4 rounded-2xl relative hover:scale-105 transition hover:-rotate-3">
              <div className="w-44 h-64 bg-[#AEBCFF] border-[#7381CB] border-4 rounded-xl p-2 relative text-center">
                <p className="bg-[#DFE5FF] rounded-md p-2 text-[#7381CB] text-xs font-bold">hardware projects!</p>
                <img src="/cardhardware2.png" className="mt-2"/>
                <div className="bg-[#DFE5FF] rounded-md p-2 text-[#7381CB] mr-2 bottom-2 absolute">
                  <p className="text-xs font-bold">will 2026 be the year i finally finish them!</p>
                </div>
              </div>
            </div>
            <div className="border-white border-4 rounded-2xl relative hover:scale-105 transition hover:-rotate-3">
              <div className="w-44 h-64 bg-[#FFA3AB] border-[#FF616D] border-4 rounded-xl p-2 relative text-center">
                <p className="bg-[#FFECEE] rounded-md p-2 text-[#FF616D] text-xs font-bold">art + design!</p>
                <img src="/cardart2.png" className="mt-2"/>
                <div className="bg-[#FFECEE] rounded-md p-2 text-[#FF616D] mr-2 bottom-2 absolute">
                  <p className="text-xs font-bold">if you see me irl, ask me for a sticker :3</p>
                </div>
              </div>
            </div>
            <div className="border-white border-4 rounded-2xl relative hover:scale-105 transition hover:-rotate-3">
              <div className="w-44 h-64 bg-[#FFD16A] border-[#ED7E00] border-4 rounded-xl p-2 relative text-center">
                <p className="bg-[#FFEBD2] rounded-md p-2 text-[#ED7E00] text-xs font-bold">debate!</p>
                <img src="/carddebate2.png" className="mt-6"/>
                <div className="bg-[#FFEBD2] rounded-md p-2 text-[#ED7E00] mr-2 bottom-2 absolute">
                  <p className="text-xs font-bold">i love yapping!! i mostly do bp format :D</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-3 border-white bg-gray-950/85  rounded-sm p-4 md:pb-2 max-w-xl space-y-3 mt-12 relative">
            <img src="/catemote3.png" className="w-24 absolute right-4 -top-6 hover:scale-105 transition"/>
            <p className="mr-28 hidden md:block">also! i code sometimes! this site is made with react + tailwind. check out my <a href="https://github.com/acornitum" className="text-[#FEE19F]" target="_blank" rel="noopenner noreferrer">github</a>!</p>
            <div className="md:hidden">
              <p className="">also! i code sometimes!</p>
              <p>i made this site with react.</p>
              <p>check out my <a href="https://github.com/acornitum" className="text-[#FEE19F]" target="_blank" rel="noopenner noreferrer">github!</a></p>
            </div>
            
          </div>








        </div>

        <img src="/cat.png" className="w-64 md:w-96 md:my-6 hover:scale-101 transition"/>


        <div className="border-3 border-white bg-gray-950/85  rounded-sm p-4 max-w-xl space-y-3 mt-4 relative mx-5 text-sm">
          <img src="/catemote2.png" className="w-24 absolute right-4 -top-14 hover:scale-105 transition"/>
          <p>i took a gap year!</p>
          <p>after graduating high school june 2024, i spent a year in vermont to build things @ hack club.</p>
          <p>here are a couple of things i've led:</p>
          <p><a href="https://undercity.hackclub.com/" className="text-[#FEE19F]" target="_blank" rel="noopenner noreferrer">undercity</a>: a 4-day hardware hackathon @ github hq</p>
          <p><a href="https://solder.hackclub.com/" className="text-[#FEE19F]" target="_blank" rel="noopenner noreferrer">solder</a>: make your first first pcb, get an electronics kit</p>

          <div className="mt-6"><Link to="/pictures">
            <p className="border-2 border-white p-2 opacity-50 hover:opacity-80 hover:bg-gray-800 transition hover:scale-101">vermont? do you have pictures? →</p>
          </Link></div>


          <div className="">
            <p className="border-2 border-white p-2 opacity-30 hover:opacity-40">what else did you do during your gap year? → (coming soon)</p>
          </div>

        </div>

        <div className="mt-20"></div>

        < Footer />

      </div>
      
    </main>
  );
}