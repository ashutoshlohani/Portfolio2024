import thankyouText from '../assets/thankyouText.svg';
import { FaDribbble } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import byMe from '../assets/d&dbyme.svg';

function Footer() {
   return (
      <section id='contact' className='bg-dark text-light'>
         <div className='mx-6 sm:mx-14 lg:mx-28 py-[5rem]'>
            <div className='flex flex-wrap justify-between items-end'>
               <img src={thankyouText} />
               {/* <p>2024</p> */}
               <div className='flex flex-col items-end gap-8'>
                  <div className='flex gap-8 text-[2.5rem]'>
                     <FaLinkedin />
                     <FaGithub />
                     <FaDribbble />
                  </div>
                  <img src={byMe} />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Footer;
