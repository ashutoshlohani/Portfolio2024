import profilePicture from '../assets/profilePicture.webp';

const About = () => (
   <section className='bg-dark text-light gap-10'>
      <div
         id='about'
         className='py-[5rem] lg:py-[14rem] flex flex-col-reverse sm:flex-row mx-6 sm:mx-14 lg:mx-28'>
         <div className='basis-1/2'>
            <p className='text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]'>
               {`ヽ(•‿•)`} <span className='waving-hand'>{`ﾉ`}</span>
            </p>
            <h1 className='text-[2.5rem] lg:text-5xl xl:text-[5rem] leading-tight xl:leading-tight mt-4 mb-8 lg:my-8 xl:mb-14 xl:mt-8'>
               {`Hi, I'm Aashu`}
               <br />
               {`Nice To Meet You.`}
            </h1>
            <p className='font-light text-base lg:text-[1rem] xl:text-[1.4rem] w-[100%] leading-relaxed'>
               {`I'm a frontend developer based in Nainital, India. The space between development and design is where I thrive. I'm trying to build useful and usable things to put good into the world. I push myself to learn new tools, understand new patterns and principles, and keep growing as a developer. In the meantime, you'll find me doodling and watching anime.`}
            </p>
         </div>

         <div className='flex basis-1/2 justify-center items-center'>
            <div className='flex justify-center mb-10 sm:mb-0 sm:p-8 lg:p-0 h-[14rem] sm:h-[100%] w-full sm:w-[100%] lg:w-[80%] xl:w-[75%]'>
               <img
                  src={profilePicture}
                  alt='Ashutosh Lohani'
                  className='object-cover rounded-md max-h-[100%]'
                  width={'100%'}
               />
            </div>
         </div>
      </div>

      <div className='gap-10 flex flex-col sm:flex-row pb-[4rem] lg:pb-[4rem] lg:pt-[8rem] mx-6 sm:mx-14 lg:mx-28'>
         <div className='basis-1/2'>
            <h1 className='flex flex-row text-[2.5rem] lg:text-5xl xl:text-[5rem] leading-tight xl:leading-none mb-8'>
               {`Development`}
            </h1>
            <p className='font-light text-base lg:text-[1rem] xl:text-[1.4rem] w-[100%] leading-relaxed'>
               {`In building web applications, I'm equipped with just the right tools and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale. Aesthetics, performance, and scalability are priorities on my radar.`}
            </p>
         </div>

         <div className='basis-1/2'>
            <h1 className='text-[2.5rem] lg:text-5xl xl:text-[5rem] leading-tight xl:leading-none mb-8'>
               {`Design`}
            </h1>
            <p className='font-light text-base lg:text-[1rem] xl:text-[1.4rem] w-[100%] leading-relaxed'>
               {`I'm probably not the typical designer positioned behind an Illustrator art board adjusting pixels, but I design. Immersed in style sheets tweaking typography and contemplating layouts is where you'll find me.`}
            </p>
         </div>
      </div>
   </section>
);

export default About;
