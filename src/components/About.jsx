import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Tech from "./Tech";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='rounded-[20px] py-5 px-5 min-h-[270px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        I'm a Full Stack Developer based in India, currently working for a startup as Lead Application Services Engineer.
        I build Web Application, Mobile Application, AI/CV algorithms and Game AI Engine. I enjoy designing and building complex applicaitons with cutting-edge technologies as I specialize in Angular, React, C# .Net Core, Entity Framework, SQL & Azure.
        Alongside technical skills, I have been leading a team of developers in end to end software development following agile methodologies. The immense curiosity to learn and explore things around has given a great sense of joy where I continuosly immerse myself in state of the art of Artificial Intelligence and Computer Vision in combination with Game AI.
        I am adept at handling multiple projects in a fast paced environment with no compromise to quality. Excellent at time management, organization, problem solving and meeting deadlines.
      </motion.p>

      <div className='mt-8 flex flex-wrap gap-10'>
        <Tech />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
