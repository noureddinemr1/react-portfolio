import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiLaravel,
  DiPython,
  DiPostgresql,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <>
    <div className="mt-24 max-w-[1200px] mx-auto relative" id="hero">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <TypeAnimation
    sequence={[
      "FullStack Web Dev",
      1500, // Increased delay to allow more time between phrases
      "Python Dev",
      1500, // Increased delay to allow more time between phrases
    ]}
    speed={30} // Adjust speed for a smoother typing effect
    repeat={Infinity}
    className="font-sm text-gray-100 text-3xl md:text-3xl  mb-4"
  />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-700 text-2xl tracking-tight mb-4"
                >
                    Hey , I am<br/>
                   <span className="text-cyan-500 text-5xl  md:text-5xl  ">Noureddine <br></br> Marzougui</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-700 max-w-[300px] md:max-w-[500px] md: text-lg mb-6"
                >
                    I am a passionate fullStack developer with over 2 years of experience.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 188, 212,0.4)" }}
                        className="z-10 cursor-pointer  text-gray-700 text-sm md:w-auto p-4 border
                                     border-cyan-500 rounded-xl"     
                    >
                        Download CV
                    </motion.button>

                    <div className="flex gap-6 flex-row text-3xl md:text-4xl text-cyan-500 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/noureddinemr1"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/noureddinemr1/"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/noureddinemr/"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <div className="relative flex justify-center items-center">
      <motion.img
        src={profilepic}
        className="w-[300px] sm:w-[250px]  md:w-[300px] lg:w-[400px] rounded-full border-4 border-cyan-500"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, boxShadow: "0px 0px 8px rgba(0, 188, 212,0.8)" }}
        viewport={{ once: true }}
        
        animate={{
          borderRadius: [
            "16% 39% 30% 61% / 69% 47% 40% 25%",
            "39% 13% 42% 52% / 74% 55% 20% 32%",
            "25% 37% 14% 65% / 40% 23% 49% 20%",
            "39% 37% 39% 9% / 44% 33% 38% 43%",
            "16% 39% 30% 61% / 69% 47% 40% 25%"
          ]
        }}
        transition={{
          borderRadius: {
            duration: 12, // Animation duration for border-radius
            repeat: Infinity, // Repeat indefinitely
            ease: "linear" // Smooth continuous transition
          }
        }}
      />
    </div>
        </div>
            <h2 className="m-0 pt-2 mt-5 text-center text-gray-700 text-bold text-3xl  md:hidden ">Skills</h2>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row pt-2 pb-8   px-8 md:px-8 w-full justify-center items-center md:py-24"
        >
           
            
           
            <DiReact className="text-cyan-500 text-6xl  hover:-translate-y-1 transition-transform duration-300" />
            <DiNodejsSmall className="text-green-700 text-6xl mx-2 hover:-translate-y-1 transition-transform duration-300" />
            <DiLaravel className="text-orange-600 text-6xl mx-2 hover:-translate-y-1 transition-transform duration-300" />              
            <DiMongodb className="text-lime-600 text-6xl mx-2 hover:-translate-y-1 transition-transform duration-300" />
            <DiPostgresql className="text-sky-700 text-6xl mx-2 hover:-translate-y-1 transition-transform duration-300" />
            <DiPython className="text-sky-700 text-6xl mx-2 hover:-translate-y-1 transition-transform duration-300"/>

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
    </>
  )
}

export default Hero