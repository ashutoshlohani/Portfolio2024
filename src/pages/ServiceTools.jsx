import { MdOutlineWeb } from 'react-icons/md';
import { AiOutlineApi } from 'react-icons/ai';
import { SiMaterialdesignicons } from 'react-icons/si';
import { MdSettingsInputComposite } from 'react-icons/md';
function ServiceTools() {
   return (
      <section style={{ background: 'rgba(32, 32, 32, 0.95)' }} className='text-light'>
         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
               fill='#202020'
               fillOpacity='1'
               d='M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
         </svg>
         <h1 className='text-dark text-[5.5rem] font-bold text-center relative to-[-3.5rem]'>
            Toolbox
         </h1>
         <div className='mx-6 sm:mx-14 lg:mx-28'>
            <p className='text-[1.5rem] mb-10'>
               {`Here's how can`}
               <br />
               {`I help you :)`}
            </p>

            <div className='flex flex-col gap-[2rem]'>
               <div className='flex gap-4 align-baseline'>
                  <MdOutlineWeb className='text-[1rem] mt-1 w-5' />

                  <div>
                     <p className='text-[1rem] font-semibold mb-2'>
                        Website Creation and Enhancement
                     </p>
                     <div className='text-[0.9rem]'>
                        <p>Build a new website</p>
                        <p>Improve your website</p>
                        <p>Create a web app</p>
                     </div>
                  </div>
               </div>

               <div className='flex gap-4 align-baseline'>
                  <AiOutlineApi className='text-[1.2rem] mt-1 w-5' />

                  <div>
                     <p className='text-[1rem] font-semibold mb-2'>Integration Services</p>
                     <div className='text-[0.9rem]'>
                        <p>Content Management System Integration</p>
                        <p>API Integration for Web Services</p>
                     </div>
                  </div>
               </div>

               <div className='flex gap-4 align-baseline'>
                  <SiMaterialdesignicons className='text-[0.8rem] mt-1 w-5' />

                  <div>
                     <p className='text-[1rem] font-semibold mb-2'>UI/UX Design</p>
                     <div className='text-[0.9rem]'>
                        <p>Design / refactor UI</p>
                        <p>Responsive Web Design</p>
                        <p>Interactive Landing Page</p>
                        <p>Web Animation and Micro-interactions</p>
                     </div>
                  </div>
               </div>

               <div className='flex gap-4 align-baseline'>
                  <MdSettingsInputComposite className='text-[1rem] mt-1 w-5' />

                  <div>
                     <p className='text-[1rem] font-semibold mb-2'>Performance Optimization</p>
                     <div className='text-[0.9rem]'>
                        <p>Front-end SEO and Performance Optimization</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ServiceTools;
