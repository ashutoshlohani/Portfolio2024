import thankyouText from '../assets/thankyouText.svg';
import { FaDribbble } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import byMe from '../assets/d&dbyme.svg';
import { MagneticButton } from './magnetic';

function Footer() {
   return (
      <section id='contact' className='bg-[#1C1E21] text-light'>
         <div className='mx-6 sm:mx-14 lg:mx-28 py-[2rem]'>
            <div className='flex flex-wrap justify-between items-end mt-8'>
               <div className='w-[30%] md:w-[25%] lg:w-[15%] p-2' style={{ position: 'relative' }}>
                  <img
                     src={thankyouText}
                     alt='version year'
                     className='rotate-infinite'
                     style={{ width: '100%' }}
                  />
                  <p
                     className='font-mono text-lg md:text-2xl lg:text-xl xl:text-3xl leading-none'
                     style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        margin: '0',
                     }}>
                     20
                     <br />
                     24
                  </p>
               </div>

               <div className='flex flex-col items-end gap-8'>
                  <div className='flex gap-4 sm:gap-8 text-[1.8rem] sm:text-[2.5rem]'>
                     <MagneticButton className='text-[1.8rem] sm:text-[2.5rem]'>
                        <a
                           href='https://www.linkedin.com/in/ashutosh-lohani/'
                           target='_blank'
                           rel='noreferrer'
                           aria-label='LinkedIn'>
                           <FaLinkedin />
                        </a>
                     </MagneticButton>
                     <MagneticButton className='text-[1.8rem] sm:text-[2.5rem]'>
                        <a
                           href='https://github.com/ashutoshlohani'
                           target='_blank'
                           rel='noreferrer'
                           aria-label='Github'>
                           <FaGithub />
                        </a>
                     </MagneticButton>
                     <MagneticButton className='text-[1.8rem] sm:text-[2.5rem]'>
                        <a
                           href='https://dribbble.com/oaashussadsdsa'
                           target='_blank'
                           rel='noreferrer'
                           aria-label='Dribbble'>
                           <FaDribbble />
                        </a>
                     </MagneticButton>
                  </div>
                  <p
                     src={byMe}
                     alt='Designed and developed by me'
                     className='hidden sm:block font-mono opacity-70'>
                     Designed and developed by me with ❤️
                  </p>
               </div>
            </div>

            <div className='mt-[2rem] text-center font-mono  text-[0.5rem] sm:hidden opacity-70'>
               <p src={byMe} alt='Credit'>
                  Designed and developed by me with ❤️
               </p>
            </div>
         </div>
      </section>
   );
}

export default Footer;
