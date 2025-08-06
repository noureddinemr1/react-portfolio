import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import fitcoach from "../assets/fitcoach.jpg"
import automeetbot from "../assets/automeetbot.png"
import pricetracker from "../assets/pricetracker.png"

import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';


const projects = [
    {
      img: project3,
      title: "CompetiTracker",
      description: "A web tool designed to track competitors’ strategies—pricing, promotions, and product changes in Tunisia’s e-commerce market.",
      links: {
        site: "#",
        github: "https://github.com/noureddinemr1/competitracker",
      },
    },

    {
      img: fitcoach,
      title: "fitCoach",
      description: "FitCoach is a full-stack fitness coaching platform built with Next.js and Supabase, offering personalized training plans, progress tracking, and client management.",
      links: {
        site: "#",
        github: "https://github.com/noureddinemr1/fitcoach",
      },
    },
    
    {
      img: automeetbot,
      title: "AutoMeetBot",
      description: "A bot that enters google meets sessions transcribe audio and generates a summary of the meeting and stored in the database.",
      links: {
        site: "#",
        github: "https://github.com/SpillWord/Test-SpillWord-Meeting",
      },
    },
     {
      img: pricetracker,
      title: "priceTracker",
      description: "AI powered web tool designed to track a price of giving product url + prompt with discord alerts when price changes  ",
      links: {
        site: "#",
        github: "https://github.com/noureddinemr1/automated-price-tracking",
      },
    },
    {
      img: project1,
      title: "Dream House",
      description: "Full Stack real estate web application using NextJs expressJs and MongoDB.",
      links: {
        site: "#",
        github: "https://github.com/noureddinemr1/dream-house",
      },
    },
    {
      img: project2,
      title: "HealthCare",
      description: "Full Stack Doctor Appointment Scheduling Web Application using MERN Stack",
      links: {
        site: "#",
        github: "https://github.com/noureddinemr1/HealthCare",
      },
    },
  ]

export default function Portfolio (){
  return (
    <div className='max-w-[1000px] mt-0 mx-auto p-6 md:my-5' id="portfolio">
        <h2 className='mb-10 text-3xl font-bold text-center underline text-cyan-500'>Portfolio</h2>
        {projects.map((project, index) => (
          <>
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full p-4 md:w-1/2'>
                  <div className='overflow-hidden rounded-lg shadow-lg'>
                      <img
                          src={project.img}
                          alt={project.title}
                          className='object-cover w-full h-full transition-transform duration-500 transform hover:scale-110'
                      />
                  </div>
                </div>

                <div className='flex flex-col justify-center w-full p-4 md:w-1/2'>
                    <h3 className='mb-4 text-2xl font-semibold text-cyan-500 '>{project.title}</h3>
                    <p className='mb-4 text-sm font-medium text-gray-700'>{project.description}</p>
                    <div className='flex h-10'>
                        <a href={project.links.github} target="_blank" 
                        rel="noopener noreferrer"
                            className='flex items-center px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700'>
                            <AiOutlineGithub className='mr-2' /> <span className='text-sm text-gray-200'>View on GitHub</span>
                        </a>
                    </div>


                </div>

            </div>
            </Reveal>
            </>
        ))}
        
    </div>
  )
}

