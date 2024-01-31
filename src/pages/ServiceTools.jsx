import React from 'react';
import api from '../assets/icons/api.svg';
import design from '../assets/icons/design.svg';
import down from '../assets/icons/down.svg';
import tune from '../assets/icons/tune.svg';
import website from '../assets/icons/website.svg';
import figma from '../assets/techIcons/figma.svg';
import firebase from '../assets/techIcons/firebase.svg';
import git from '../assets/techIcons/git-icon.svg';
import javascript from '../assets/techIcons/javascript.svg';
import next from '../assets/techIcons/nextjs-icon.svg';
import react from '../assets/techIcons/react.svg';
import redux from '../assets/techIcons/redux.svg';
import sass from '../assets/techIcons/sass.svg';
import tailwind from '../assets/techIcons/tailwindcss-icon.svg';
import three from '../assets/techIcons/threejs.svg';

// eslint-disable-next-line react/prop-types
const ServiceItem = ({ icon, title, content }) => (
   <div className='flex flex-col align-top mb-16 basis-1/2'>
      {icon && React.cloneElement(icon, { className: 'h-6 w-6 mb-4 opacity-40' })}
      <p className='text-[1.2rem] xl:text-[1.6rem] font-semibold mb-4'>{title}</p>
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
         <section
            // style={{
            //    background: 'linear-gradient(to bottom, rgba(28, 30, 33, 0.95), #1C1E21)',
            // }}
            className='text-light bg-dark'>
            <svg
               className='block sm:hidden'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 1440 320'>
               <path fill='#1C1E21' fillOpacity='1' d={svgPath}></path>
            </svg>
            <div className='relative top-[-2.3rem] sm:top-[-5rem] md:top-[-6rem] lg:top-[-7rem] xl:top-[-4rem]'>
               <h1
                  data-scroll
                  data-scroll-direction='horizontal'
                  data-scroll-speed='4'
                  className='text-light opacity-10 text-[6.5rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[18rem] font-black md:font-bold flex text-center justify-center leading-none'>
                  TOOLBOX
               </h1>
               <p className='text-[1.5rem] lg:text-[3rem] leading- font-light mx-6 sm:mx-14 lg:mx-28 mb-16 mt-[6rem]'>
                  <img src={down} className='my-2 opacity-25' />
                  {`How can I help you : )`}
               </p>

               <div
                  data-scroll
                  data-scroll-class='fadeIn'
                  data-scroll-repeat='true'
                  className='op-class flex flex-col xl:flex-row align-top mx-6 sm:mx-14 lg:mx-28'>
                  <div className='flex basis-1/2 flex-col md:flex-row sm:gap-8'>
                     <ServiceItem
                        icon={<img src={website} />}
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
                        icon={<img src={design} />}
                        title='UI/UX Design'
                        content={
                           <>
                              <p>Design / refactor UI.</p>
                              <p>Responsive Web Design.</p>
                              <p>Interactive Landing Page.</p>
                              <p>Web Animation and Micro interactions.</p>
                           </>
                        }
                     />
                  </div>
                  <div className='flex basis-1/2 flex-col md:flex-row sm:gap-8'>
                     <ServiceItem
                        icon={<img src={api} />}
                        title='Integration Services'
                        content={
                           <>
                              <p>Content Management System Integration.</p>
                              <p>API Integration for Web Services.</p>
                           </>
                        }
                     />

                     <ServiceItem
                        icon={<img src={tune} />}
                        title='Performance Optimization'
                        content={
                           <>
                              <p>Frontend SEO and Performance Optimization.</p>
                           </>
                        }
                     />
                  </div>
               </div>

               <div
                  data-scroll
                  data-scroll-direction='vertical'
                  data-scroll-speed='1'
                  data-scroll-repeat='true'
                  data-scroll-class='fadeIn'
                  className=' op-class mx-6 sm:mx-14 lg:mx-28 mt-[2rem] xl:mt-[8rem] xl:pb-[8rem]'>
                  <img src={down} className='my-2 opacity-25' />
                  <p className='text-[1.5rem] xl:text-[3rem] font-light leading-tight'>
                     My go to tech stack to
                     <br />
                     make any projects happen.
                  </p>
                  <div className='flex flex-col sm:flex-row my-[6rem] gap-6 lg:gap-[3rem] xl:gap-[4rem]'>
                     <div className='flex justify-between basis-1/2'>
                        {techStackImagesOne.map(({ name, image }, index) => (
                           <div className='flex flex-col justify-between items-center' key={index}>
                              <img
                                 src={image}
                                 alt={name}
                                 className='w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] '
                              />
                              <p className='hidden sm:block text-[0.6rem] xl:text-[0.8rem] mt-3 xl:mt-6 font-light opacity-60'>
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
                                 className='w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] '
                              />
                              <p className='hidden sm:block text-[0.6rem] xl:text-[0.8rem] mt-3 xl:mt-5 font-light opacity-60'>
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
