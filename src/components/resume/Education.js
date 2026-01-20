import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="py-12 font-titleFont flex gap-20"
        >
      {/* part one */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021-2027</p>
          <h2 className="text-4xl font-bold">Qualification</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech. Computer Science & Engineering"
            subTitle="Techno Main Salt Lake, Kolkata"
            result="CGPA: 8.46"
            des="Graduation Ending Year : Aug 2023 - Aug 2027
            Currently pursuing a Bachelor’s degree, focused on strengthening technical knowledge and gaining practical 
            experience through hands-on learning and projects."
          />
          <ResumeCard
            title="Intermediate"
            subTitle="LA Garden High School"
            result="92 %"
            des="Higher Secondary Education Completion Period: 2021-2023
            Completed Intermediate education with Physics, Chemistry, and Mathematics (PCM), building a strong foundation in 
            analytical thinking, problem-solving, and logical reasoning."
          />
          <ResumeCard
            title="Matriculation"
            subTitle="D A V N Public School"
            result="86.2%"
            des="Senior Secondary Education Completion Year: 2021
            Completed Matriculation with a focus on core academic subjects, developing 
            discipline, consistency, and fundamental learning skills."
          />
        </div>
      </div>
      {/* part two */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2027</p>
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Electricity Billing System"
            subTitle="Core Java, MySQL"
            result="Completed"
            des="Developed a software-based billing system to automate electricity bill generation and 
            customer record management.Implemented modules for customer connections, billing details, and secure data storage using MySQL."
          />
          <ResumeCard
            title="Portfolio Site"
            subTitle="HTML, React.js, Tailwind CSS"
            result="Completed"
            des="Designed and developed a responsive personal portfolio to showcase projects, skills, and experience.
            Built a clean, modern UI with React and Tailwind CSS, ensuring smooth navigation and mobile-friendly design"
          />
          <ResumeCard
            title="SpringBoot Application"
            subTitle="Under Construction"
            result="Working"
            des="Experiencing the real it industry application....."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education