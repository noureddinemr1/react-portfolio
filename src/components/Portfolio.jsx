import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"

import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';


const projects = [
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
    {
      img: project4,
      title: "ISIMM's Clubs",
      description: "Full Stack web application for higher institute (ISIMM) clubs managment using PHP.",
      links: {
        site: "#",
        github: "https://github.com/noureddinemr1/Isimm-s-clubs-application",
      },
    },
  ]

export default function Portfolio (){
  return (
    <div className='max-w-[1000px] mt-0 mx-auto p-6 md:my-5' id="portfolio">
        <h2 className='text-3xl font-bold text-center mb-10 underline text-cyan-500'>Portfolio</h2>
        {projects.map((project, index) => (
          <>
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                  <div className='overflow-hidden rounded-lg shadow-lg'>
                      <img
                          src={project.img}
                          alt={project.title}
                          className='w-full h-full object-cover transform transition-transform duration-500 hover:scale-110'
                      />
                  </div>
                </div>

                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-cyan-500 mb-4 '>{project.title}</h3>
                    <p className='text-gray-700 font-medium text-sm mb-4'>{project.description}</p>
                    <div className='flex h-10'>
                        <a href={project.links.github} target="_blank" 
                        rel="noopener noreferrer"
                            className='flex items-center px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                      transition duration-300'>
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

