import React from "react"
import Profile from "../../assets/img/profile.gif"
function About() {
  return (
    <div className="container mx-auto">
      <div id="about" className="w-full px-4 pt-32 pb-28">
        <div className="max-w-full text-center mb-16">
          <h2 className="text-4xl sm:text-6xl text-slate-100 font-pixelF">
            About
          </h2>
        </div>
        <div className="px-4 max-w-full mt-8">
          <div className="md:grid grid-rows-1 grid-flow-col gap-8">
            <div className="row-span-3 mb-5">
              <img
                src={Profile}
                alt="profile"
                className="w-full rounded-sm cursor-pointer"
              />
            </div>
            <div className="col-span-2">
              <h2 className="text-center text-slate-100 md:text-start  text-4xl font-pixelF sm:text-5xl mb-5 drop-shadow-md">
                Hello, I'm Nzib
              </h2>
              <h3 className="text-center text-slate-100 md:text-start  font-semibold text-2xl sm:text-3xl mb-5">
                A Pixel Artist | Illustrator
              </h3>
              <p className="font-light text-slate-100 text-md lg:text-lg leading-relaxed md:w-10/12 ">
                I'm a talented pixel artist hailing from Indonesia. Since 2019,
                I've been on this colorful journey in the digital art realm.
                Pixel by pixel, I bring imagination to life in beautiful and
                captivating ways. Pixel art isn't just a job for me, it's a
                soulful calling that lets me express true uniqueness and
                creativity. I believe every detail holds its own beauty, and
                that's what I pour into each piece I craft.
              </p>
            </div>
            <div className="row-span-2 col-span-2">
              <p className="font-light text-slate-100 text-md mb-5 lg:text-lg leading-relaxed md:w-10/12 mt-5">
                Come join me on this adventure into a mesmerizing visual
                universe!
              </p>
              <a
                href="#contact"
                className="bg-tranparent px-6 py-2 border border-primaryYellow rounded-md text-primaryYellow mt-5 hover:bg-primaryYellow hover:text-white"
              >
                Let`s Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
