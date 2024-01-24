import { HeroText } from '../components';
const Hero = () => {
   return (
      <section className='h-[80vh] md:h-[90vh] relative' id='/'>
         <div className='flex items-center justify-center h-full mx-6 sm:mx-14 lg:mx-28'>
            <HeroText />
         </div>
      </section>
   );
};

export default Hero;
