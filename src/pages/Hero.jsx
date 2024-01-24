// import { PiArrowCircleDownThin } from 'react-icons/pi';
import { HeroText } from '../components';
// import AnimatedSphere from '../components/anime/anime';
const Hero = () => {
   return (
      <section className='h-[80vh] md:h-[90vh] relative' id='/'>
         <div className='flex items-center justify-center h-full mx-6 sm:mx-14 lg:mx-28'>
            <HeroText />
         </div>
         {/* <AnimatedSphere /> */}

         {/* <div className='absolute bottom-0'>
            <Button />
         </div> */}
      </section>
   );
};

export default Hero;
