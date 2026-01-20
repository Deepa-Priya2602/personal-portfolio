import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Web Developer.", "Problem Solver."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Deepa Priya</span></h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I love crafting smooth, interactive, and user-friendly web experiences using HTML, CSS, JavaScript, and React. With Java as my go-to programming language and strong knowledge of MySQL, I combine logical problem-solving skills DSA with creativity.<br /><br />
          When I am not coding, you will find me strumming my guitar or weaving words into poetic stanzas and lyrics. I believe in learning by doing and always focus on turning theory into practical impact.<br /><br />
          Curious, adaptable, and driven, I am on a journey to keep building, learning, and creating every day.
        </p>

      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner