import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
   useEffect(() => {
      const textElements = gsap.utils.toArray('.text');

      textElements.forEach(text => {
         gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
               trigger: text,
               start: 'center 80%',
               end: 'center 20%',
               scrub: true,
            },
         });
      });
   }, []);

   return (
      <h1 className='text'>
         <p className=' box text-xl leading-relaxed font-light w-[80%] '>
            {`I'm a frontend developer based on Nainital India. The space between development
                  and design where i thrive. I'm trying to build useful and usable things to put
                  good into the world. I push myself to learn new tools, understand new patterns and
                  principles, and keep growing as a developer. In meantime, you'll find me doodling
                  and watching anime.`}
         </p>
      </h1>
   );
};

export default Gsap;
