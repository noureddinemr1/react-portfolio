import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import {
  DiPython,
  DiPostgresql,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/Noureddine_Marzougui.pdf";
  link.setAttribute("download", "Noureddine_Marzougui.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <>
      <div className="mt-24 max-w-[1200px] mx-auto relative" id="hero">
        <div className="grid gap-8 md:grid-cols-2 place-items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <TypeAnimation
              sequence={[
                "FullStack Web Dev",
                1500,
                "Python Dev",
                1500,
              ]}
              speed={30}
              repeat={Infinity}
              className="mb-4 text-3xl text-gray-100 font-sm md:text-3xl"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-4 text-2xl tracking-tight text-gray-700"
            >
              Hey , I am
              <br />
              <span className="text-5xl text-cyan-500 md:text-5xl ">
                Noureddine <br />
                Marzougui
              </span>
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
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 188, 212,0.4)",
                }}
                className="z-10 p-4 text-sm text-gray-700 border cursor-pointer md:w-auto border-cyan-500 rounded-xl"
                onClick={downloadCV}
              >
                Download CV
              </motion.button>

              <div className="z-20 flex flex-row gap-6 text-3xl md:text-4xl text-cyan-500">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/noureddinemr1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/noureddinemr1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.instagram.com/noureddinemr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative flex items-center justify-center">
            <motion.img
              src={profilepic}
              className="w-[300px] sm:w-[250px] md:w-[300px] lg:w-[400px] rounded-full border-4 border-cyan-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                boxShadow: "0px 0px 8px rgba(0, 188, 212,0.8)",
              }}
              viewport={{ once: true }}
              animate={{
                borderRadius: [
                  "16% 39% 30% 61% / 69% 47% 40% 25%",
                  "39% 13% 42% 52% / 74% 55% 20% 32%",
                  "25% 37% 14% 65% / 40% 23% 49% 20%",
                  "39% 37% 39% 9% / 44% 33% 38% 43%",
                  "16% 39% 30% 61% / 69% 47% 40% 25%",
                ],
              }}
              transition={{
                borderRadius: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          </div>
        </div>

        <h2 className="pt-2 m-0 mt-5 text-3xl text-center text-gray-700 text-bold md:hidden ">
          Skills
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-row items-center justify-center w-full px-8 pt-2 pb-8 md:px-8 md:py-24"
        >
          <DiReact className="text-6xl transition-transform duration-300 text-cyan-500 hover:-translate-y-1" />
          <SiNextdotjs className="mx-2 text-5xl text-gray-800 transition-transform duration-300 hover:-translate-y-1" />
          <DiNodejsSmall className="mx-2 text-6xl text-green-700 transition-transform duration-300 hover:-translate-y-1" />
          <DiMongodb className="mx-2 text-6xl transition-transform duration-300 text-lime-600 hover:-translate-y-1" />
          <DiPostgresql className="mx-2 text-6xl transition-transform duration-300 text-sky-700 hover:-translate-y-1" />
          <DiPython className="mx-2 text-6xl transition-transform duration-300 text-sky-700 hover:-translate-y-1" />
        </motion.div>

        <div className="absolute inset-0 hidden md:block">
          <ShinyEffect left={0} top={0} size={1400} />
        </div>
      </div>
    </>
  );
};

export default Hero;
