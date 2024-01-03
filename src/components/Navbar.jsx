import { useEffect } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { CiMenuBurger } from 'react-icons/ci';
function Navbar() {
   useEffect(() => {
      // Add event listeners for smooth scrolling on mount
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

      // Cleanup event listeners on unmount
      return () => {
         links.forEach(link => {
            link.removeEventListener('click', handleSmoothScroll);
         });
      };
   }, []); // Empty dependency array ensures that the effect runs only once on mount

   const navLinks = [
      { href: '/about', text: 'About' },
      { href: '/projects', text: 'Projects' },
      { href: '/contact', text: 'Contact' },
   ];

   return (
      <header>
         <nav className='mx-6 sm:mx-14 lg:mx-28'>
            <div className='flex flex-wrap items-center justify-between mt-8'>
               <a className='font-normal text-xl flex items-center'>
                  <BsCodeSlash className='mr-2' />
                  Ashutosh Lohani
               </a>

               <button className='md:hidden'>
                  <CiMenuBurger className='text-2xl' />
               </button>

               <div className='hidden w-full md:block md:w-auto'>
                  <ul className='flex gap-16 text-xl font-normal'>
                     {navLinks.map(link => (
                        <li key={link.href}>
                           <a href={link.href}>{link.text}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default Navbar;
