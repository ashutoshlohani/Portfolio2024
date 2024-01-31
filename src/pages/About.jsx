import profilePicture from '../assets/profilePicture.webp';

const About = () => (
   <section className='bg-dark text-light gap-10'>
      <div
         id='about'
         className='py-[5rem] lg:py-[10rem] flex flex-col-reverse sm:flex-row mx-6 sm:mx-14 lg:mx-28'>
         <div
            data-scroll
            data-scroll-direction='vertical'
            data-scroll-speed='2'
            className='basis-1/2'>
            <div
               data-scroll
               data-scroll-class='fadeIn'
               data-scroll-repeat='true'
               className='op-class text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]'>
               {`ヽ(•‿•)`} <p className='waving-hand'>{`ﾉ`}</p>
            </div>
            <h1
               data-scroll
               data-scroll-class='fadeIn'
               data-scroll-repeat='true'
               className='op-class text-[2.5rem] lg:text-5xl xl:text-[4.5rem] leading-tight xl:leading-[1.15] mt-4 mb-8 lg:my-8 xl:mb-14 xl:mt-8'>
               {`Hi, I'm Aashu`}
               <br />
               {`Nice To Meet You.`}
            </h1>
            <p
               data-scroll
               data-scroll-class='fadeIn'
               data-scroll-repeat='true'
               className='op-class font-light text-base lg:text-[1rem] xl:text-[1.4rem] w-[100%] leading-normal'>
               {`I'm a frontend developer based in Nainital, India. The space between development and design is where I thrive. I'm trying to build useful and usable things to put good into the world. I push myself to learn new tools, understand new patterns and principles, and keep growing as a developer. In the meantime, you'll find me doodling and watching anime.`}
            </p>
         </div>

         <div className='flex basis-1/2 justify-center items-center'>
            <div className='flex justify-center mb-10 sm:mb-0 sm:p-8 lg:p-0 h-[14rem] sm:h-[100%] w-full sm:w-[100%] lg:w-[80%] xl:w-[70%]'>
               <img
                  src={profilePicture}
                  alt='Ashutosh Lohani'
                  className='object-cover rounded-md max-h-[100%]'
                  width={'100%'}
                  data-scroll
                  data-scroll-direction='vertical'
                  data-scroll-speed='4'
               />
            </div>
         </div>
      </div>

      <div className='gap-10 flex flex-col sm:flex-row pb-[4rem] lg:pb-[16rem] lg:pt-[1rem] mx-6 sm:mx-14 lg:mx-28'>
         <div
            data-scroll
            data-scroll-class='fadeIn'
            data-scroll-repeat='true'
            className='op-class basis-1/2'>
            <h1 className='flex flex-row text-[2.5rem] lg:text-5xl xl:text-[4.5rem] leading-tight xl:leading-none mb-8'>
               {`Development`}
            </h1>
            <p className='font-light text-base lg:text-[1rem] xl:text-[1.4rem] w-[100%] leading-normal'>
               {`In building web applications, I'm equipped with just the right tools and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale. Aesthetics, performance, and scalability are priorities on my radar.`}
            </p>
         </div>

         <div
            data-scroll
            data-scroll-class='fadeIn'
            data-scroll-repeat='true'
            className='op-class basis-1/2'>
            <h1 className='text-[2.5rem] lg:text-5xl xl:text-[4.5rem] leading-tight xl:leading-none mb-8'>
               {`Design`}
            </h1>
            <p className='font-light text-base lg:text-[1rem] xl:text-[1.4rem] w-[100%] leading-normal'>
               {`I'm probably not the typical designer positioned behind an Illustrator art board adjusting pixels, but I design. Immersed in style sheets tweaking typography and contemplating layouts is where you'll find me.`}
            </p>
         </div>
      </div>
   </section>
);

export default About;
