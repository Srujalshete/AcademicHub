import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import img01 from "../assets/img-01.jpg";
import img02 from "../assets/img-02.jpg";
import img03 from "../assets/img-03.jpg";
import Navbar from './navbar';
import Footer from './footer';

const dummyContent = [
  {
    title: "1. Secure Perimeter",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image: img01,  
  },
  {
    title: "2. Surveillance Systems",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image: img02,
  },
  {
    title: "3. Emergency Preparedness",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image: img03,
  },
];

export function TracingBeamDemo() {
  return (
    <>
    <Navbar/>
    <TracingBeam className="px-6 mt-14">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
      <h1 className="block w-full text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">School Security</h1>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 text-black")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert text-black">
              {item?.image && (
                <div className="rounded-lg mb-10 overflow-hidden">
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    <Footer/>
    </>
  );
}

export default TracingBeamDemo;
