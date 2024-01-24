import thankyouText from '../assets/thankyouText.svg';
import { FaDribbble } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import byMe from '../assets/d&dbyme.svg';

function Footer() {
   return (
      <section id='contact' className='bg-[#1C1E21] text-light'>
         <div className='mx-6 sm:mx-14 lg:mx-28 py-[4rem]'>
            <div className='flex flex-wrap justify-between items-end'>
               <div className='w-[30%] md:w-[25%] lg:w-[12%]'>
                  <img src={thankyouText} />
               </div>
               {/* <p>2024</p> */}
               <div className='flex flex-col items-end gap-8'>
                  <div className='flex gap-6 sm:gap-8 text-[1.8rem] sm:text-[2.5rem]'>
                     <a
                        href='https://www.linkedin.com/in/ashutosh-lohani/'
                        target='_blank'
                        rel='noreferrer'>
                        <FaLinkedin className='hover:opacity-75' />
                     </a>
                     <a href='https://github.com/ashutoshlohani' target='_blank' rel='noreferrer'>
                        <FaGithub className='hover:opacity-75' />
                     </a>
                     <a href='https://dribbble.com/oaashu' target='_blank' rel='noreferrer'>
                        <FaDribbble className='hover:opacity-75' />
                     </a>
                  </div>
                  <img src={byMe} className='hidden sm:block w-[75%]' />
               </div>
            </div>

            <div className='mt-[5rem] mx-[4rem] sm:hidden'>
               <img src={byMe} />
            </div>
         </div>
      </section>
   );
}

export default Footer;
