import { FaFileDownload } from 'react-icons/fa';

function Contact() {
   const svgPath =
      'M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z';
   return (
      <section id='contact' className='bg-dark text-light'>
         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path fill='#000000' fillOpacity='1' d={svgPath}></path>
         </svg>
         <div className='mx-6 sm:mx-14 lg:mx-28 py-[8rem]'>
            <div className='flex flex-wrap justify-between items-start'>
               <div className=' leading-tight'>
                  <p className='text-[1.2rem] lg:text-[3rem]'>Have an awesome idea?</p>
                  <p className='text-[2rem] lg:text-[5rem]'>{"Let's work together."}</p>
               </div>

               <div>
                  <button
                     type='button'
                     className='font-normal border rounded-full text-[1rem] px-10 py-2.5 text-center inline-flex items-center me-2 my-[2rem] sm:my-0'>
                     <FaFileDownload className='me-2' />
                     Resume
                  </button>
               </div>
            </div>

            <p className='text-[1rem] lg:text-[1.4rem] font-light md:my-[4rem] xl:w-[50%]'>
               I am looking for freelance or full-time opportunities in startups, dev firms, and
               product base companies.
            </p>

            <hr className='mt-[3rem] lg:mt-[10rem]' />
            {/* <p className='text-center text-[1.3rem] lg:text-[6rem]'>aashutosh.lohaani@gmail.com</p> */}
            <p className='text-center text-[1.4rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]  xl:text-[6rem] overflow-hidden py-2'>
               ashulohani97@outlook.com
            </p>
            <hr />
         </div>
      </section>
   );
}

export default Contact;
