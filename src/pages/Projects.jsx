import { useState } from 'react';
import { GoArrowDownRight } from 'react-icons/go';
import { PiEyeClosedLight } from 'react-icons/pi';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const projects = [
   {
      projectName: 'Bhuli',
      description:
         'A real-time chat application built with React and Socket.io with java and everything.',
      technology: ['React', 'Socket.io', 'CSS'],
      image: project1,
   },
   {
      projectName: 'InnerScore',
      description:
         'An online shopping platform developed using MERN stack (React, Node.js, MongoDB).',
      technology: ['React', 'Node.js'],
      image: project2,
   },
   {
      projectName: 'AlmaBetter',
      description:
         'A weather application that fetches current weather information using a weather API.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      image: project3,
   },
   {
      projectName: 'Fcuk****',
      description:
         'A task management tool with features like adding tasks, marking them as completed, deleting tasks.',
      technology: ['Vue.js', 'Firebase', 'CSS'],
      image: project4,
   },
];
function Projects() {
   const [isModalOpen, setModalOpen] = useState(false);

   const openModal = () => {
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };

   const svgPath =
      'M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z';
   return (
      <section
         id='projects'
         className='bg-dark text-light'
         style={{
            // background: 'linear-gradient(to bottom, #000000, #000000)',
            background: 'linear-gradient(to top, #202020, #101010)',
         }}>
         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='sm:hidden'>
            <path fill='#202020' fillOpacity='1' d={svgPath}></path>
         </svg>
         <div className='mx-6 sm:mx-14 lg:mx-28 pt-[1rem]'>
            <div className='flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-16 gap-10'>
               <div className='text-[3rem] lg:text-[5rem] leading-none'>
                  <GoArrowDownRight className='text-[2rem] mb-2 hidden sm:block' />
                  Projects
               </div>
               <div className='flex flex-col items-end opacity-70'>
                  <p className='text-[1rem] lg:text-[1.2rem] text-right'>
                     Code is like humor. when you
                     <br></br>
                     “have” to explain it, it’s bad.
                  </p>
                  <p className='text-[0.8rem] lg:text-[1rem] font-extralight'>-Cory House</p>
               </div>
            </div>

            <div className='flex flex-wrap py-[4rem] lg:py-[8rem]'>
               {projects.map((project, index) => (
                  <div key={index} className='w-full sm:w-1/2'>
                     <div
                        className='h-fit rounded text-light bg-cover bg-center bg-no-repeat my-8 sm:my-4 mx-0 sm:mx-4 '
                        // className='h-fit rounded text-light bg-cover bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${project.image})` }}>
                        <div className='bg-black bg-opacity-60 hover:bg-opacity-75 rounded flex flex-col justify-between'>
                           <div className='flex flex-col justify-center items-center gap-2 py-[4rem] xl:py-[8rem]'>
                              <PiEyeClosedLight
                                 className='text-[2rem] cursor-pointer'
                                 onClick={openModal}
                              />
                              <p className='text-[0.8rem] font-normal hidden sm:block'>
                                 View Project
                              </p>
                           </div>

                           <div className='p-4 lg:p-8'>
                              <p className='text-[2.5rem] lg:text-[3rem] font-bold my-4'>
                                 {project.projectName}
                              </p>
                              <p className='text-[0.9rem] sm:text-[1rem] font-light lg:font-normal mb-4 opacity-90'>
                                 {project.description}
                              </p>

                              <div className='flex flex-wrap gap-2 my-4 opacity-90 text-[0.6rem] sm:text-[0.8rem]'>
                                 {project.technology.map((tech, techIndex) => (
                                    <div
                                       key={techIndex}
                                       className='border border-light rounded-full w-fit px-4 py-2'>
                                       {tech}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {isModalOpen && (
            <div className='fixed inset-0 overflow-y-auto flex items-center justify-center'>
               <div className='absolute inset-0 bg-black opacity-50'></div>

               <div className='z-50 bg-white text-dark p-6 rounded-lg shadow-xl'>
                  <h1 className='text-2xl mb-4'>Project Name</h1>
                  <p>This is the description.</p>

                  {/* Button to close the modal */}
                  <button
                     className='mt-4 bg-red-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                     onClick={closeModal}>
                     Close Modal
                  </button>
               </div>
            </div>
         )}
      </section>
   );
}

export default Projects;
