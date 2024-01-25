import { FaFileDownload } from 'react-icons/fa';
import { MagneticButton } from '../components/magnetic';

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
         <div className='mx-6 sm:mx-14 lg:mx-28 py-[4rem]'>
            <div className='flex flex-wrap justify-between items-start md:gap-16'>
               <div className=' leading-none'>
                  <p className='text-[1.5rem] md:text-[2rem] lg:text-[3rem] py-4 text-secondary-foreground'>
                     Have an awesome idea?
                  </p>
                  <p className='text-[3.5rem] md:text-[4rem] lg:text-[5rem]'>
                     {"Let's work together."}
                  </p>
               </div>

               <MagneticButton
                  onClick={downloadPDF}
                  type='button'
                  variant='primary'
                  size='lg'
                  className='font-normal text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] px-8 py-4 text-center inline-flex items-center font-mono me-2 mt-[2.5rem] mb-[1rem] sm:my-0'>
                  <span className='flex justify-center items-center'>
                     <FaFileDownload className='me-2' />
                     Resume
                  </span>
               </MagneticButton>
            </div>

            <p className='text-[1rem] lg:text-[1.3rem] font-light md:my-[2rem] lg:w-[90%] xl:w-[55%]'>
               I am actively seeking both freelance and full-time employment opportunities within
               dynamic startup environments, established development firms, and companies with a
               focus on product innovation.
            </p>

            <div className='py-[5rem]'>
               <hr className='hidden sm:block' />
               <p className='text-center text-[1.2rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[5.5rem] overflow-hidden py-4 border sm:border-none rounded-full'>
                  <a href='mailto:aashutosh.lohaani@gmail.com'>aashutosh.lohaani@gmail.com</a>
               </p>
               <p className='sm:hidden mt-4 text-center text-[1.2rem] overflow-hidden py-4 border rounded-full'>
                  <a href='tel:+918954991441'>+91 89549 91441</a>
               </p>
               <hr className='hidden sm:block' />
            </div>
         </div>
      </section>
   );
}

export default Contact;
