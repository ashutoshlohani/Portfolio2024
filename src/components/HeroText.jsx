import React, { useEffect } from 'react';
import { useScramble } from 'use-scramble';
import stickyPaper from '../assets/reactPaper.png';

const PROXIMITY_THRESHOLD = 320;

const HeroText = React.memo(() => {
   const { ref, replay } = useScramble({
      overdrive: false,
      overflow: true,
      range: [48, 49],
      scramble: 10,
      speed: 0.2,
      text: `Binary`,
      tick: 1,
   });

   const handleMouseMove = e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const spans = document.querySelectorAll('span');

      spans.forEach(span => {
         const rect = span.getBoundingClientRect();
         const spanX = rect.x + rect.width / 2;
         const spanY = rect.y + rect.height / 2;

         const distance = Math.sqrt((mouseX - spanX) ** 2 + (mouseY - spanY) ** 2);

         const maxDistance = Math.min(window.innerWidth, window.innerHeight) / 2.5;
         const fontWeight =
            100 + (800 / maxDistance) * (maxDistance - Math.min(distance, PROXIMITY_THRESHOLD));

         span.style.fontWeight = fontWeight.toFixed(0);
      });
   };

   useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
         document.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <>
         <div
            className='leading-none flex flex-col items-left md:text-center'
            // style={{ zIndex: 1000 }}
         >
            <img
               src={stickyPaper}
               className='relative right-[-75%] md:right-[-90%] top-[6rem] lg:top-[3rem] md:top-[2rem] w-[5rem] lg:w-[6rem] h-min drop-shadow-[5px_5px_5px_rgba(0,0,0,0.3)]'
               style={{ zIndex: -1 }}
            />
            <h1 className='font-semibold md:font-medium lg:font-normal text-[4rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.9rem]'>
               {['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', '\u00A0'].map((char, index) => (
                  <span key={index}>{char}</span>
               ))}

               <br className='sm:hidden' />

               {['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'].map((char, index) => (
                  <span key={index}>{char}</span>
               ))}
            </h1>

            <h1 className='font-light md:font-medium lg:font-normal text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.9rem]'>
               <p className='leading-snug'>
                  {['T', 'u', 'r', 'n', 'i', 'n', 'g', '\u00A0'].map((char, index) => (
                     <span key={index}>{char}</span>
                  ))}
                  <span ref={ref} onMouseOver={replay} onFocus={replay} className='leading-snug' />
               </p>

               <p>
                  {['I', 'n', 't', 'o', '\u00A0', 'B', 'e', 'a', 'u', 't', 'y', '.'].map(
                     (char, index) => (
                        <span key={index}>{char}</span>
                     )
                  )}
               </p>
            </h1>
         </div>
      </>
   );
});

HeroText.displayName = 'I am Frontend Developer Turning Binary Into Beauty.';

export default HeroText;
