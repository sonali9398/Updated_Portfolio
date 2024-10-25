import React from "react";
import { workExperience } from "../data/data";
import MagicButton from "./MagicButton.tsx";
import './Experience.css';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
    <div className="py-20 w-full">
          <h1 className="heading text-center mb-6 font-bold text-5xl">
            My <span className="text-purple-600">Work Experience</span>
          </h1>

          <div className="w-full mt-12 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 ">
            {workExperience.map((card, index) => (
              <MagicButton
                key={card.id}
                otherClasses="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 card"
                // handleClick={() => alert(`Clicked on ${card.title}`)}
                style={{
                  gridColumn: workExperience.length % 2 !== 0 && index === workExperience.length - 1 ? "span 2" : "auto",
                }}
              >
                <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="h-32 w-32 rounded-full"
                  />
                  <h1 className="text-center text-xl md:text-2xl font-bold">{card.title}</h1>
                  <ul className="text-center text-white mt-3">
                    {Array.isArray(card.desc) ? (
                      card.desc.map((item, index) => (
                        <li key={index} className="mt-1">
                          {item}
                        </li>
                      ))
                    ) : (
                      <li>{card.desc}</li>
                    )}
                  </ul>
                </div>
              </MagicButton>
            ))}
          </div>
        </div>
    </section>
    
  );
};

export default Experience;
