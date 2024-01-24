import { useState } from 'react';
import { GoArrowDownRight, GoProjectSymlink } from 'react-icons/go';
import { IoIosGitBranch } from 'react-icons/io';
import { PiEyeClosedLight } from 'react-icons/pi';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const projects = [
   {
      projectName: 'Bhuli',
      description:
         'A real-time chat application built with React and Socket.io with java and everything. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['React', 'Socket.io', 'CSS'],
      image: project1,
      role: 'Frontend Developer',
      duration: '1 months',
      liveLink: '',
      sourceCode: '',
   },
   {
      projectName: 'InnerScore',
      description:
         'An online shopping platform developed using MERN stack (React, Node.js, MongoDB). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['React', 'Node.js', 'MongoDB', 'CSS'],
      image: project2,
      role: 'Backend Developer',
      duration: '2 months',
      liveLink: '',
      sourceCode: '',
   },
   {
      projectName: 'AlmaBetter',
      description:
         'A weather application that fetches current weather information using a weather API. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      image: project3,
      role: 'React Developer',
      duration: '3 months',
      liveLink: '',
      sourceCode: '',
   },
   {
      projectName: 'Fcuk****',
      description:
         'A task management tool with features like adding tasks, marking them as completed, deleting tasks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['Vue.js', 'Firebase', 'CSS'],
      image: project4,
      role: 'Vue Developer',
      duration: '4 months',
      liveLink: '',
      sourceCode: '',
   },
];

function projectLinks(project) {
   return (
      <div className='flex text-base sm:text-lg font-normal py-4 sm:py-8 gap-8'>
         {!project.liveLink && (
            <a href={project.liveLink} target='_blank' rel='noreferrer'>
               <p className='flex items-center gap-2'>
                  <GoProjectSymlink />
                  View live
               </p>
            </a>
         )}
         {!project.sourceCode && (
            <a href={project.sourceCode} target='_blank' rel='noreferrer'>
               <p className='flex items-center gap-2'>
                  <IoIosGitBranch />
                  Source code
               </p>
            </a>
         )}
      </div>
   );
}
function Projects() {
   const [isModalOpen, setModalOpen] = useState(false);
   const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

   const openModal = index => {
      setSelectedProjectIndex(index);
      setModalOpen(true);
      toggleMenu();
   };

   const closeModal = () => {
      setSelectedProjectIndex(null);
      setModalOpen(false);
      toggleMenu();
   };

   const previous = () => {
      setSelectedProjectIndex(prevIndex => (prevIndex - 1 + projects.length) % projects.length);
   };

   const next = () => {
      setSelectedProjectIndex(prevIndex => (prevIndex + 1) % projects.length);
   };

   const enableScroll = () => {
      document.body.style.overflow = 'visible';
   };

   const disableScroll = () => {
      document.body.style.overflow = 'hidden';
   };

   const toggleMenu = () => {
      setModalOpen(prevMenuState => prevMenuState);
      if (!isModalOpen) {
         disableScroll();
      } else {
         enableScroll();
      }
   };

   const svgPath =
      'M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z';

   return (
      <section
         id='projects'
         className='bg-dark text-light'
         style={{
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
                        onClick={() => openModal(index)}
                        className='cursor-pointer h-fit rounded text-light bg-cover bg-center bg-no-repeat my-8 sm:my-4 mx-0 sm:mx-4 '
                        style={{ backgroundImage: `url(${project.image})` }}>
                        <div className='bg-black bg-opacity-50 hover:bg-opacity-65 rounded flex flex-col justify-between'>
                           <div className='flex flex-col justify-center items-center gap-2 py-[4rem] xl:py-[8rem]'>
                              <PiEyeClosedLight className='text-[2rem]' />
                           </div>

                           <div className='p-4 lg:p-8'>
                              <p className='text-[2.5rem] lg:text-[3rem] font-bold my-4'>
                                 {project.projectName}
                              </p>
                              <p className='line-clamp-2 text-[0.9rem] sm:text-[1rem] font-light lg:font-normal mb-4 opacity-90'>
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

         {isModalOpen && selectedProjectIndex !== null && (
            <div className='fixed inset-0 flex items-center justify-center'>
               <div className='absolute inset-0 bg-black opacity-50' onClick={closeModal}></div>

               <div className='overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-50 bg-light text-dark w-[90vw] h-[90vh] rounded-lg shadow-xl '>
                  <button
                     className='absolute bg-dark text-light bg-opacity-80 text-xl cursor-pointer rounded-full p-2 top-[8%] right-[8%]'
                     onClick={closeModal}>
                     <TfiClose />
                  </button>
                  <div className='flex flex-col md:flex-row'>
                     <div className='flex basis-2/5 justify-center items-center w-full'>
                        <img
                           src={projects[selectedProjectIndex].image}
                           alt='Cover Picture'
                           className='object-cover h-full'
                        />
                     </div>

                     <div className='basis-3/5 p-4 sm:p-10 sm:overflow-y-auto'>
                        <div className='flex flex-col h-full justify-between'>
                           <div className='text-sm sm:text-base'>
                              <p className='text-5xl sm:text-6xl'>
                                 {projects[selectedProjectIndex].projectName}
                              </p>
                              {projectLinks(projects[selectedProjectIndex])}

                              <div className='py-2'>
                                 <p className='font-semibold pb-1'>Role</p>
                                 <p>{projects[selectedProjectIndex].role}</p>
                              </div>

                              <div className='py-2'>
                                 <p className='font-semibold pb-1'>Duration</p>
                                 <p>{projects[selectedProjectIndex].duration}</p>
                              </div>

                              <div className='py-2'>
                                 <p className='font-semibold pb-1'>Description</p>
                                 <p>{projects[selectedProjectIndex].description}</p>
                              </div>
                           </div>

                           <div className='flex flex-col justify-between items-start py-4'>
                              <div className='flex flex-wrap  gap-2 text-[0.6rem] sm:text-[1rem]'>
                                 {projects[selectedProjectIndex].technology.map(
                                    (tech, techIndex) => (
                                       <div
                                          key={techIndex}
                                          className='border bg-dark text-light rounded-full w-fit px-4 py-2'>
                                          {tech}
                                       </div>
                                    )
                                 )}
                              </div>
                              <div className='flex gap-4 pt-8 lg:pt-0 w-full justify-center sm:justify-end'>
                                 <button onClick={previous}>
                                    <SlArrowLeft />
                                 </button>
                                 {selectedProjectIndex + 1} / {projects.length}
                                 <button onClick={next}>
                                    <SlArrowRight />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
}

export default Projects;
