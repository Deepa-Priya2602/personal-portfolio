import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        <ProjectsCard
  title="Electricity Billing System"
  des="Electricity Billing System is a desktop-based application developed using Core Java and Swing UI. The project is designed to manage customer electricity records, generate bills, calculate electricity charges based on unit consumption, and store billing details efficiently. It implements Core Java concepts such as OOPs, classes & objects, inheritance, JDBC, exception handling, and file/database handling. Swing is used to create an interactive graphical user interface for user login, customer management, bill generation, and payment details. The system helps automate the manual billing process and improves accuracy and efficiency."
  src={projectOne}
  githubLink="https://github.com/Deepa-Priya2602/Electricity-Billing-System-Java-Project"
  websiteLink="https://project1.vercel.app"
/>

<ProjectsCard
  title="E-commerce Website"
  des="A full stack E-commerce project developed using Spring Boot, React.js, and MySQL with Razorpay payment gateway integration. The application provides features such as user authentication, product management, shopping cart, order handling, and secure online payments. Spring Boot is used for backend REST APIs, React.js for creating a responsive frontend UI, and MySQL for database management. Razorpay integration enables real-time online payment processing, making the system efficient, secure, and user-friendly."
  src={projectTwo}
  githubLink="https://github.com/Deepa-Priya2602?tab=repositories"
  websiteLink="https://ecom-razorpay-fullstack.vercel.app"
/>

<ProjectsCard
  title="Email Spam Detection"
  des="An Email Spam Detection web application developed using Streamlit and Machine Learning algorithms. The project implements data preprocessing and filtration techniques such as tokenization, stop-word removal, and text vectorization to improve prediction accuracy. Various ML models were used to classify emails as spam or non-spam, providing practical knowledge of machine learning algorithms, model training, and prediction analysis. Streamlit was used to build an interactive and user-friendly web interface for real-time email spam detection."
  src={projectThree}
  githubLink="https://github.com/Deepa-Priya2602/Email-spam-classifier"
  websiteLink="https://email-spam-classifier-itjlruhgszkfkbaepu7q7m.streamlit.app/"
/>
      </div>
    </section>
  );
}

export default Projects