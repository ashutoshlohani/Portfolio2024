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
         'An online shopping platform developed using MERN stack (MongoDB, Express.js, React, Node.js).',
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
         'A task management tool with features like adding tasks, marking them as completed, and deleting tasks.',
      technology: ['Vue.js', 'Firebase', 'CSS'],
      image: project4,
   },
];
function Projects() {
   return (
      <section
         id='projects'
         className='bg-dark text-light'
         style={{
            background: 'linear-gradient(to bottom, #000000, #000000)',
            // background: 'linear-gradient(to bottom, #202020, #000000)',
         }}>
         <div className='mx-6 sm:mx-14 lg:mx-28'>
            <div className='flex flex-col sm:flex-row justify-between items-center py-16 gap-10'>
               <div className='text-[3rem] lg:text-[5rem] leading-none'>
                  <GoArrowDownRight className='text-[2rem] mb-2 hidden sm:block' />
                  Projects
               </div>
               <div className='flex flex-col items-end'>
                  <p className='text-[1rem] sm:text-[1.2rem] text-right'>
                     Code is like humor. when you
                     <br></br>
                     “have” to explain it, it’s bad.
                  </p>
                  <p className='text-[0.8rem] sm:text-[1rem] font-extralight'>-Cory House</p>
               </div>
            </div>

            <div className='flex flex-wrap py-[2rem] lg:py-[8rem]'>
               {projects.map((project, index) => (
                  <div key={index} className='w-full sm:w-1/2'>
                     <div
                        className='h-fit rounded text-light bg-cover bg-center bg-no-repeat my-4 mx-0 sm:mx-4'
                        // className='h-fit rounded text-light bg-cover bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${project.image})` }}>
                        <div className='bg-black bg-opacity-60 hover:bg-opacity-75 rounded flex flex-col justify-between'>
                           <div className='flex flex-col justify-center items-center gap-2 py-[4rem] lg:py-[8rem]'>
                              <PiEyeClosedLight className='text-[2rem] cursor-pointer' />
                              <p className='text-[0.8rem] font-normal hidden sm:block'>
                                 View Project
                              </p>
                           </div>

                           <div className='p-4 lg:p-8'>
                              <p className='text-[2.5rem] lg:text-[3rem] font-semibold my-4'>
                                 {project.projectName}
                              </p>
                              <p className='text-[0.8rem] sm:text-[1rem] font-light lg:font-normal mb-4 opacity-90'>
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
      </section>
   );
}

export default Projects;
