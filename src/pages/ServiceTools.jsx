import React from 'react';
import { AiOutlineApi } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { GoArrowDownRight } from 'react-icons/go';
import { MdDesignServices, MdOutlineTune } from 'react-icons/md';
import figma from '../assets/figma.svg';
import firebase from '../assets/firebase.svg';
import git from '../assets/git-icon.svg';
import javascript from '../assets/javascript.svg';
import next from '../assets/nextjs-icon.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import sass from '../assets/sass.svg';
import tailwind from '../assets/tailwindcss-icon.svg';
import three from '../assets/threejs.svg';

const ServiceItem = ({ icon, title, content }) => (
   <div className='flex flex-col align-top mb-16 basis-1/2'>
      {icon && React.cloneElement(icon, { className: 'text-[1.5rem] mb-2 opacity-40' })}
      <p className='text-[1.2rem] xl:text-[1.6rem] font-medium mb-4'>{title}</p>
      <div className='text-base xl:text-[1.2rem] font-light opacity-60 leading-relaxed'>
         {content}
      </div>
   </div>
);

const techStackImagesOne = [
   { name: 'Javascript', image: javascript },
   { name: 'React', image: react },
   { name: 'Next JS', image: next },
   { name: 'Three JS', image: three },
   { name: 'Tailwind CSS', image: tailwind },
];

const techStackImagesTwo = [
   { name: 'SASS', image: sass },
   { name: 'Redux', image: redux },
   { name: 'Firebase', image: firebase },
   { name: 'Git', image: git },
   { name: 'Figma', image: figma },
];

function ServiceTools() {
   const svgPath =
      'M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z';

   return (
      <>
         <section style={{ background: 'rgba(32, 32, 32, 0.95)' }} className='text-light'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
               <path fill='#202020' fillOpacity='1' d={svgPath}></path>
            </svg>
            <div className='relative top-[-4rem] sm:top-[-7rem] md:top-[-8rem] lg:top-[-10rem] xl:top-[-15rem]'>
               <h1 className=' text-dark text-[5.5rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem]  xl:text-[22rem] font-bold text-center overflow-hidden'>
                  Toolbox
               </h1>
               <p className='text-[1.5rem] lg:text-[3rem] leading-tight mx-6 sm:mx-14 lg:mx-28 mb-16'>
                  <GoArrowDownRight className='text-[1.5rem] mb-2' />
                  {`Here's how can `}
                  <br className='sm:hidden' />
                  {`I help you :)`}
               </p>

               <div className='flex flex-col align-top mx-6 sm:mx-14 lg:mx-28'>
                  <div className='flex basis-1/2 flex-col md:flex-row sm:gap-8'>
                     <ServiceItem
                        icon={<CgWebsite />}
                        title='Website Creation and Enhancement'
                        content={
                           <>
                              <p>Build a new website.</p>
                              <p>Improve your website.</p>
                              <p>Create a web app.</p>
                           </>
                        }
                     />

                     <ServiceItem
                        icon={<MdDesignServices />}
                        title='UI/UX Design'
                        content={
                           <>
                              <p>Design / refactor UI.</p>
                              <p>Responsive Web Design.</p>
                              <p>Interactive Landing Page.</p>
                              <p>Web Animation and Micro-interactions.</p>
                           </>
                        }
                     />
                  </div>
                  <div className='flex basis-1/2 flex-col md:flex-row sm:gap-8'>
                     <ServiceItem
                        icon={<AiOutlineApi />}
                        title='Integration Services'
                        content={
                           <>
                              <p>Content Management System Integration.</p>
                              <p>API Integration for Web Services.</p>
                           </>
                        }
                     />

                     <ServiceItem
                        icon={<MdOutlineTune />}
                        title='Performance Optimization'
                        content={
                           <>
                              <p>Frontend SEO and Performance Optimization.</p>
                           </>
                        }
                     />
                  </div>
               </div>

               <div className='mx-6 sm:mx-14 lg:mx-28 mt-[2rem] xl:mt-[8rem]'>
                  <GoArrowDownRight className='text-[1.5rem] mb-2' />
                  <p className='text-[1.5rem] xl:text-[1.6rem] font-light'>
                     My go to tech stack to make any projects happen.
                  </p>
                  <div className='flex flex-col sm:flex-row mt-[5rem] gap-6 lg:gap-[3rem] xl:gap-[4rem]'>
                     <div className='flex justify-between basis-1/2'>
                        {techStackImagesOne.map(({ name, image }, index) => (
                           <div className='flex flex-col justify-between items-center' key={index}>
                              <img
                                 src={image}
                                 alt={name}
                                 className='w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem]'
                              />
                              <p className='text-[0.5rem] xl:text-[0.8rem] mt-2 xl:mt-5 font-light opacity-50'>
                                 {name}
                              </p>
                           </div>
                        ))}
                     </div>

                     <div className='flex justify-between basis-1/2'>
                        {techStackImagesTwo.map(({ name, image }, index) => (
                           <div className='flex flex-col justify-between items-center' key={index}>
                              <img
                                 src={image}
                                 alt={name}
                                 className='w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem]'
                              />
                              <p className='text-[0.5rem] xl:text-[0.8rem] mt-2 xl:mt-5 font-light opacity-50'>
                                 {name}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default ServiceTools;

{
   /* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path fill='rgba(32, 32, 32, 0.95)' fillOpacity='1' d={svgPath}></path>
   </svg> */
}
