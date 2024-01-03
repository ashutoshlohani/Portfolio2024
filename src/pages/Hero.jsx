// import { PiArrowCircleDownThin } from 'react-icons/pi';
// import paperNote from '../assets/reactPaper.png';
// import mail from '../assets/mail.svg';
// import Button from '../components/button/Button';
import { HeroText } from '../components';

const Hero = () => {
   return (
      <section className='h-screen mx-6 sm:mx-14 lg:mx-28 relative' id='/'>
         <div className='flex items-center justify-center h-full'>
            <HeroText />
         </div>

         {/* <div className='absolute bottom-0'>
            <Button />
         </div> */}
      </section>
   );
};

export default Hero;
