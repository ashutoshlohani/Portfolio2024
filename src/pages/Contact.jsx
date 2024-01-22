import { FaFileDownload } from 'react-icons/fa';

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
   // const svgPath =
   //    'M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z';
   return (
      <section
         id='contact'
         className='bg-[#101010] text-light'
         style={{
            // background: 'linear-gradient(to bottom, #000000, #000000)',
            background: 'linear-gradient(to bottom, #202020, #1C1E21)',
         }}>
         {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path fill='#000000' fillOpacity='1' d={svgPath}></path>
         </svg> */}
         <div className='mx-6 sm:mx-14 lg:mx-28 py-[6rem]'>
            <div className='flex flex-wrap justify-between items-start md:gap-16'>
               <div className=' leading-tight'>
                  <p className='text-[1.5rem] opacity-60 md:text-[2rem] lg:text-[3rem]'>
                     Have an awesome idea?
                  </p>
                  <p className='text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-medium'>
                     {"Let's work together."}
                  </p>
               </div>

               <button
                  onClick={downloadPDF}
                  type='button'
                  className='font-normal border rounded-full text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] px-8 py-2 text-center inline-flex items-center font-mono me-2 mt-[2.5rem] mb-[1rem] sm:my-0'>
                  <FaFileDownload className='me-2' />
                  Resume
               </button>
            </div>

            <p className='text-[1rem] lg:text-[1.4rem] font-light md:my-[2rem] lg:w-[70%]'>
               I am looking for freelance or full-time opportunities in startups, dev firms, and
               product base companies.
            </p>

            <hr className='mt-[4rem] lg:mt-[10rem]' />
            <p className='text-center text-[1.4rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[6rem] overflow-hidden py-2'>
               <a href='mailto:aashutosh.lohaani@gmail.com'>aashutosh.lohaani@gmail.com</a>
            </p>
            <hr />
         </div>
      </section>
   );
}

export default Contact;
