import type { LoaderFunctionArgs } from "react-router-dom";
import { Footer } from "../components/footer";

export async function loader(_: LoaderFunctionArgs) {
  return null;
}

export default function Pictures() {
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
            <img src="/catpicture.png" className="absolute w-44 -top-36 right-6"/>
            <p>here are some photos of vermont :D </p>
            <p>i bought a film camera at the start of my gap year! some of these are taken by me, others are taken by friends - all photos here are taken on a reto ultrawide and unedited</p>
            <p>during my gap year, i lived in burlington, vt, usa! hack club hq is located in shelburne, vt.</p>
            <p className="opacity-50"><i>i dont actually know what i'm doing when i take pictures, but i thought these looked pretty cool</i></p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 z-10 max-w-6xl gap-2 mx-5">
          {Object.values(images).map((src, i) => (
            <div 
              key={src}
              className="border-4 border-gray-700 hover:border-gray-500 transition-transform duration-200 hover:scale-102"
              style={{ transform: `rotate(${rotations[i]}deg)` }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${rotations[i]}deg)`)}
            >
              <img key={src} src={src} loading="lazy" decoding="async"/>
            </div>
          ))}
        </div>


        < Footer />

      </div>
      
    </main>

  );
}

const images = import.meta.glob(
  "/app/pages/pictures/*.{png,jpg,jpeg,webp}",
  { eager: true, as: "url" }
);

const rotations = Object.values(images).map(
  () => (Math.random() * 2 - 1).toFixed(2) 
);