// import download from '../assets/icons/download.svg';
import { MagneticButton } from '../components/button';

function Contact() {
   const downloadPDF = () => {
      // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
      const pdfUrl = '../assets/ashutosh_lohani.pdf';

      // Create a hidden link element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'ashutosh_lohani.pdf';

      // Append the link to the body
      document.body.appendChild(link);

      // Trigger a click on the link
      link.click();

      // Remove the link from the body
      document.body.removeChild(link);
   };

   return (
      <section id='contact' className='bg-dark text-light'>
         <div className='mx-6 sm:mx-14 lg:mx-28 py-[10rem]'>
            <div className='flex flex-wrap justify-between items-start md:gap-16'>
               <div className=' leading-none sm:leading-6'>
                  <p className='text-[1.5rem] md:text-[2rem] lg:text-[2rem] py-4 text-secondary-foreground font-light'>
                     Have an awesome idea?
                  </p>
                  <p className='text-[3.5rem] md:text-[4rem] lg:text-[2rem]'>
                     {"Let's work together."}
                  </p>
               </div>

               <MagneticButton
                  onClick={downloadPDF}
                  variant='primary'
                  // size='xl'
                  className='font-normal text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] px-8 py-4 text-center inline-flex items-center font-mono me-2 mt-[2.5rem] mb-[1rem] sm:my-0'
                  type='button'
                  aria-label='Download Resume'>
                  {/* <span className='flex justify-center items-center'>
                     <img src={download} className='h-8 me-2' />
                  </span> */}
                  Resume
               </MagneticButton>
            </div>

            {/* <p className='text-[1rem] lg:text-[1.3rem] font-light md:my-[2rem] lg:w-[70%] xl:w-[60%] text-justify'>
               I am actively seeking both freelance and full-time employment opportunities within
               dynamic startup environments, established development firms, and companies with a
               focus on product innovation.
            </p> */}

            <div className='pt-[6rem]'>
               <hr className='hidden sm:block' />
               <p className='text-center sm:text-left text-[1.2rem] sm:text-[1.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[8rem] break-words sm:leading-none overflow-hidden py-4 sm:pt-[4rem] border sm:border-none rounded-full sm:rounded-none'>
                  <a
                     href='mailto:aashutosh.lohaani@gmail.com'
                     className='emoji-cursor sm:uppercase hover:underline'>
                     ashulohani97@
                     <br className='hidden sm:block' />
                     outlook.com
                  </a>
               </p>
               <p className='sm:hidden mt-4 text-center text-[1.2rem] overflow-hidden py-4 border rounded-full'>
                  <a href='tel:+918954991441'>+91 89549 91441</a>
               </p>
               {/* <hr className='hidden sm:block' /> */}
            </div>
         </div>
      </section>
   );
}

export default Contact;
