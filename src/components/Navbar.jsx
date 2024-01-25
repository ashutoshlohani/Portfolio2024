import { useEffect } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { MagneticButton } from './magnetic';

function Navbar() {
   useEffect(() => {
      const handleSmoothScroll = event => {
         event.preventDefault();
         const targetId = event.target.getAttribute('href').substring(1);
         const targetElement = document.getElementById(targetId);

         if (targetElement) {
            window.scrollTo({
               top: targetElement.offsetTop,
               behavior: 'smooth',
            });
         }
      };

      const links = document.querySelectorAll('nav a');
      links.forEach(link => {
         link.addEventListener('click', handleSmoothScroll);
      });

      return () => {
         links.forEach(link => {
            link.removeEventListener('click', handleSmoothScroll);
         });
      };
   }, []);

   const navLinks = [
      { href: '/about', text: 'About' },
      { href: '/projects', text: 'Projects' },
      { href: '/contact', text: 'Contact' },
   ];

   return (
      <header>
         <nav className='mx-6 sm:mx-14 lg:mx-16'>
            <div className='flex flex-wrap items-center justify-between mt-8'>
               <div className='group flex cursor-pointer font-normal text-lg items-center'>
                  <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
                     <BsCodeSlash />
                  </div>

                  <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
                     <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
                        Code by
                     </h5>
                     <h5 className='ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-[4.6rem]'>
                        Aashu
                     </h5>
                     <h5 className='absolute left-44 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-[8rem]'>
                        tosh Lohani
                     </h5>
                  </div>
               </div>

               <div className='hidden w-full md:block md:w-auto'>
                  <ul className='flex gap-16'>
                     {navLinks.map(link => (
                        <MagneticButton
                           key={link.href}
                           className='text-lg font-normal hover:font-medium'>
                           <a href={link.href}>{link.text}</a>
                        </MagneticButton>
                     ))}
                  </ul>
               </div>

               <ul className='md:hidden text-lg'>
                  {/* <a href='mailto:aashutosh.lohaani@gmail.com'>Mail💌</a> */}
                  <a href='/contact'>Mail💌</a>
               </ul>
            </div>
         </nav>
      </header>
   );
}

export default Navbar;
