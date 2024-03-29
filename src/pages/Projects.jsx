import { useState } from 'react';
import close from '../assets/icons/close.svg';
// import down from '../assets/icons/down.svg';
import eyeClose from '../assets/icons/eye-close.svg';
import left from '../assets/icons/left.svg';
import liveCode from '../assets/icons/live-code.svg';
import liveWebsite from '../assets/icons/live-website.svg';
import right from '../assets/icons/right.svg';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import { MagneticButton } from '../components/button';
// import eyeOpen from '../assets/icons/eye-open.svg';

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
      technology: ['React', 'Node.js', 'MongoDB'],
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
            <MagneticButton>
               <a href={project.liveLink} target='_blank' rel='noreferrer'>
                  <div className='flex items-center gap-2'>
                     <img src={liveWebsite} className='h-6' />
                     View live
                  </div>
               </a>
            </MagneticButton>
         )}
         {!project.sourceCode && (
            <MagneticButton>
               <a href={project.sourceCode} target='_blank' rel='noreferrer'>
                  <div className='flex items-center gap-2'>
                     <img src={liveCode} className='h-5' />
                     Source code
                  </div>
               </a>
            </MagneticButton>
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

   return (
      <section
         id='projects'
         className='text-light'
         style={{
            background: 'linear-gradient(to bottom, rgba(28, 30, 33, 0.95), #1C1E21)',
         }}>
         <div className='relative top-[-2.3rem] sm:top-[-5rem] md:top-[-6rem] lg:top-[-7rem] xl:top-[-3.5rem]'>
            <h1
               data-scroll
               data-scroll-direction='horizontal'
               data-scroll-speed='4'
               className='text-light opacity-10 text-[6.5rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[18rem] font-black md:font-bold flex text-center justify-center leading-none'>
               PROJECTS
            </h1>
         </div>
         <div className='mx-6 sm:mx-14 lg:mx-28 pt-[0rem]'>
            <div className=''>
               <div
                  data-scroll
                  data-scroll-direction='vertical'
                  data-scroll-speed='8'
                  className='flex flex-col items-end opacity-70'>
                  <p className='text-[0.8rem] sm:text-[1rem] text-right font-mono'>
                     Code is like humor. when you
                     <br></br>
                     “have” to explain it, it’s bad.
                  </p>
                  <p className='text-[0.6rem] sm:text-[0.8rem] font-extralight font-mono'>
                     -Cory House
                  </p>
               </div>
               {/* <div className='flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-16 gap-10'>
               <div className='text-[3rem] lg:text-[5rem] leading-none'>
                  <img src={down} className='mb-2 hidden sm:block' />
                  Projects
               </div>
               <div className='flex flex-col items-end opacity-70'>
                  <p className='text-[0.8rem] sm:text-[1rem] text-right font-mono'>
                     Code is like humor. when you
                     <br></br>
                     “have” to explain it, it’s bad.
                  </p>
                  <p className='text-[0.6rem] sm:text-[0.8rem] font-extralight font-mono'>
                     -Cory House
                  </p>
               </div>
            </div> */}

               <div className='flex flex-wrap py-[2rem] xl:py-[0rem]'>
                  {projects.map((project, index) => (
                     <div key={index} className='w-full sm:w-1/2'>
                        <div
                           onClick={() => openModal(index)}
                           className='cursor-pointer h-fit rounded text-light bg-cover bg-center bg-no-repeat my-8 sm:my-4 mx-0 sm:mx-4 '
                           style={{ backgroundImage: `url(${project.image})` }}>
                           <div className='bg-black bg-opacity-50 transition-all hover:bg-opacity-65 rounded flex flex-col justify-between'>
                              <div className='flex flex-col justify-center items-center py-[3rem] xl:py-[8rem]'>
                                 <img src={eyeClose} className='h-10' />
                              </div>

                              <div
                                 data-scroll
                                 data-scroll-direction='vertical'
                                 data-scroll-speed='1'
                                 className='p-4 lg:p-8'>
                                 <p className='text-[2.5rem] lg:text-[3rem] font-bold my-4'>
                                    {project.projectName}
                                 </p>
                                 <p className='line-clamp-2 text-[0.9rem] sm:text-[1rem] font-light lg:font-normal mb-4 opacity-90 w-[90%]'>
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

                     // <div
                     //    key={index}
                     //    className='overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-50 bg-light text-dark w-[100vw] h-[100vh] rounded-lg shadow-xl'>
                     //    {/* <MagneticButton
                     //       variant='ghost'
                     //       className='absolute text-xl cursor-pointer rounded-full p-3 top-8 right-8'
                     //       onClick={closeModal}>
                     //       <img src={close} />
                     //    </MagneticButton> */}
                     //    <div className='flex flex-col md:flex-row'>
                     //       <div className='flex basis-1/2 justify-center items-center w-full'>
                     //          <img
                     //             src={project.image}
                     //             alt='Cover Picture'
                     //             className='object-cover h-full'
                     //          />
                     //       </div>

                     //       <div className='basis-1/2 p-8 sm:p-10 sm:overflow-y-auto'>
                     //          <div className='flex flex-col h-full justify-between'>
                     //             <div className='text-sm sm:text-base'>
                     //                <p className='text-5xl sm:text-7xl'>{project.projectName}</p>
                     //                {projectLinks(projects[index])}

                     //                <div className='py-2'>
                     //                   <p className='font-semibold pb-1'>Role</p>
                     //                   <p>{project.role}</p>
                     //                </div>

                     //                <div className='py-2'>
                     //                   <p className='font-semibold pb-1'>Duration</p>
                     //                   <p>{project.duration}</p>
                     //                </div>

                     //                <div className='py-2'>
                     //                   <p className='font-semibold pb-1'>Description</p>
                     //                   <p>{project.description}</p>
                     //                </div>
                     //             </div>

                     //             <div className='flex flex-col justify-between items-start py-4'>
                     //                <div className='flex flex-wrap  gap-2 text-[0.6rem] sm:text-[1rem]'>
                     //                   {project.technology.map((tech, techIndex) => (
                     //                      <div
                     //                         key={techIndex}
                     //                         className='border bg-dark text-light rounded-full w-fit px-4 py-2'>
                     //                         {tech}
                     //                      </div>
                     //                   ))}
                     //                </div>
                     //                {/* <div className='flex gap-4 pt-8 lg:pt-0 w-full justify-center sm:justify-end'>
                     //                   <MagneticButton onClick={previous}>
                     //                      <img src={left} />
                     //                   </MagneticButton>
                     //                   {selectedProjectIndex + 1} / {projects.length}
                     //                   <MagneticButton onClick={next}>
                     //                      <img src={right} />
                     //                   </MagneticButton>
                     //                </div> */}
                     //             </div>
                     //          </div>
                     //       </div>
                     //    </div>
                     // </div>
                  ))}
               </div>
            </div>
         </div>

         {isModalOpen && selectedProjectIndex !== null && (
            <div className='fixed inset-0 flex items-center justify-center'>
               <div className='absolute inset-0 bg-black opacity-50' onClick={closeModal}></div>

               <div className='overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-50 bg-light text-dark w-[100vw] h-[100vh] rounded-lg shadow-xl'>
                  <MagneticButton
                     variant='ghost'
                     className='absolute text-xl cursor-pointer rounded-full p-3 top-8 right-8'
                     onClick={closeModal}>
                     <img src={close} />
                  </MagneticButton>
                  <div className='flex flex-col md:flex-row'>
                     <div className='flex basis-2/5 justify-center items-center w-full'>
                        <img
                           src={projects[selectedProjectIndex].image}
                           alt='Cover Picture'
                           className='object-cover h-full'
                        />
                     </div>

                     <div className='basis-3/5 p-8 sm:p-10 sm:overflow-y-auto'>
                        <div className='flex flex-col h-full justify-between'>
                           <div className='text-sm sm:text-base'>
                              <p className='text-5xl sm:text-7xl'>
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
                                 <MagneticButton onClick={previous}>
                                    <img src={left} />
                                 </MagneticButton>
                                 {selectedProjectIndex + 1} / {projects.length}
                                 <MagneticButton onClick={next}>
                                    <img src={right} />
                                 </MagneticButton>
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

// import { useState } from 'react';
// import liveCode from '../assets/icons/live-code.svg';
// import liveWebsite from '../assets/icons/live-website.svg';
// import project1 from '../assets/project1.png';
// import project2 from '../assets/project2.png';
// import project3 from '../assets/project3.png';
// import project4 from '../assets/project4.png';
// import { MagneticButton } from '../components/button';

// const projects = [
//    {
//       projectName: 'Bhuli',
//       description:
//          'A real-time chat application built with React and Socket.io with java and everything. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       technology: ['React', 'Socket.io', 'CSS'],
//       image: project1,
//       role: 'Frontend Developer',
//       duration: '1 months',
//       liveLink: '',
//       sourceCode: '',
//    },
//    {
//       projectName: 'InnerScore',
//       description:
//          'An online shopping platform developed using MERN stack (React, Node.js, MongoDB). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       technology: ['React', 'Node.js', 'MongoDB'],
//       image: project2,
//       role: 'Backend Developer',
//       duration: '2 months',
//       liveLink: '',
//       sourceCode: '',
//    },
//    {
//       projectName: 'AlmaBetter',
//       description:
//          'A weather application that fetches current weather information using a weather API. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       technology: ['HTML', 'CSS', 'JavaScript'],
//       image: project3,
//       role: 'React Developer',
//       duration: '3 months',
//       liveLink: '',
//       sourceCode: '',
//    },
//    {
//       projectName: 'Fcuk****',
//       description:
//          'A task management tool with features like adding tasks, marking them as completed, deleting tasks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       technology: ['Vue.js', 'Firebase', 'CSS'],
//       image: project4,
//       role: 'Vue Developer',
//       duration: '4 months',
//       liveLink: '',
//       sourceCode: '',
//    },
// ];

// function projectLinks(project) {
//    return (
//       <div className='flex text-base sm:text-lg font-normal py-4 sm:py-8 gap-8'>
//          {!project.liveLink && (
//             <MagneticButton>
//                <a href={project.liveLink} target='_blank' rel='noreferrer'>
//                   <div className='flex items-center gap-2'>
//                      <img src={liveWebsite} className='h-6' />
//                      View live
//                   </div>
//                </a>
//             </MagneticButton>
//          )}
//          {!project.sourceCode && (
//             <MagneticButton>
//                <a href={project.sourceCode} target='_blank' rel='noreferrer'>
//                   <div className='flex items-center gap-2'>
//                      <img src={liveCode} className='h-5' />
//                      Source code
//                   </div>
//                </a>
//             </MagneticButton>
//          )}
//       </div>
//    );
// }

// //    graphicContainer: {
// //       padding: '40vh 2vw 20vh',
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //    },
// //    graphic: {
// //       flexBasis: '60%',
// //       position: 'sticky',
// //       width: '100%',
// //       height: '60vh',
// //       top: '20vh',
// //       backgroundColor: '#aaa',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       '& p': {
// //          fontSize: '5rem',
// //          fontWeight: 700,
// //          textAlign: 'center',
// //          color: '#fff',
// //       },
// //    },
// //    scroller: {
// //       flexBasis: '35%',
// //    },
// //    step: {
// //       margin: '0 auto 3rem auto',
// //       padding: '180px 0',
// //       border: '1px solid #333',
// //       '& p': {
// //          textAlign: 'center',
// //          padding: '1rem',
// //          fontSize: '1.8rem',
// //          margin: 0,
// //       },
// //       '&:last-child': {
// //          marginBottom: 0,
// //       },
// //    },
// // };
// function Projects() {
//    return (
//       <section id='projects' className='text-light bg-dark'>
//          <div className='relative top-[-2.3rem] sm:top-[-5rem] md:top-[-6rem] lg:top-[-7rem] xl:top-[-3.5rem]'>
//             <h1
//                data-scroll
//                data-scroll-direction='horizontal'
//                data-scroll-speed='4'
//                className='text-light opacity-10 text-[6.5rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[18rem] font-black md:font-bold flex text-center justify-center leading-none'>
//                PROJECTS
//             </h1>
//          </div>

//          {/* <div style={styles.graphicContainer}>
//             <div style={styles.scroller}>
//                <Scrollama
//                   onStepEnter={onStepEnter}
//                   onStepExit={onStepExit}
//                   progress
//                   onStepProgress={onStepProgress}
//                   offset='400px'
//                   debug>
//                   {steps.map(value => {
//                      const isVisible = value === data;
//                      const background = isVisible ? `rgba(44,127,184, ${progress})` : 'white';
//                      const visibility = isVisible ? 'visible' : 'hidden';
//                      return (
//                         <Step data={value} key={value}>
//                            <div style={{ ...styles.step, background }}>
//                               <p>step value: {value}</p>
//                               <p style={{ visibility }}>{Math.round(progress * 1000) / 10 + '%'}</p>
//                            </div>
//                         </Step>
//                      );
//                   })}
//                </Scrollama>
//             </div>
//             <div style={styles.graphic}>
//                <p>{data}</p>
//             </div>
//          </div> */}

//          <div>
//             <div className='flex flex-wrap py-[2rem] xl:py-[0rem]'>
//                {projects.map((project, index) => (
//                   <div
//                      key={index}
//                      className='overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-50 bg-light text-dark w-[100vw] h-[100vh] rounded-lg shadow-xl'>
//                      <div className='flex flex-col md:flex-row'>
//                         <div className='flex basis-2/5 justify-center items-center w-full'>
//                            <img
//                               src={project.image}
//                               alt='Cover Picture'
//                               className='object-cover h-full'
//                            />
//                         </div>

//                         <div className='basis-3/5 p-8 sm:p-10 sm:overflow-y-auto'>
//                            <div className='flex flex-col h-full justify-between'>
//                               <div className='text-sm sm:text-base'>
//                                  <p className='text-5xl sm:text-7xl'>{project.projectName}</p>
//                                  {projectLinks(projects[index])}

//                                  <div className='py-2'>
//                                     <p className='font-semibold pb-1'>Role</p>
//                                     <p>{project.role}</p>
//                                  </div>

//                                  <div className='py-2'>
//                                     <p className='font-semibold pb-1'>Duration</p>
//                                     <p>{project.duration}</p>
//                                  </div>

//                                  <div className='py-2'>
//                                     <p className='font-semibold pb-1'>Description</p>
//                                     <p>{project.description}</p>
//                                  </div>
//                               </div>

//                               <div className='flex flex-col justify-between items-start py-4'>
//                                  <div className='flex flex-wrap  gap-2 text-[0.6rem] sm:text-[1rem]'>
//                                     {project.technology.map((tech, techIndex) => (
//                                        <div
//                                           key={techIndex}
//                                           className='border bg-dark text-light rounded-full w-fit px-4 py-2'>
//                                           {tech}
//                                        </div>
//                                     ))}
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                ))}
//             </div>
//          </div>
//       </section>
//    );
// }

// export default Projects;
