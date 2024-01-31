import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

// Import your CSS styles or use a CSS-in-JS solution

const Gallery = () => {
   useEffect(() => {
      // Initialize ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      const details = gsap.utils.toArray('.desktopContentSection:not(:first-child)');
      const photos = gsap.utils.toArray('.desktopPhoto:not(:first-child)');
      const allPhotos = gsap.utils.toArray('.desktopPhoto');

      gsap.set(photos, { yPercent: 101 });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 600px)', () => {
         console.log('desktop');

         ScrollTrigger.create({
            trigger: '.gallery',
            start: 'top top',
            end: 'bottom bottom',
            pin: '.right',
         });

         details.forEach((detail, index) => {
            let headline = detail.querySelector('h1');
            let animation = gsap
               .timeline()
               .to(photos[index], { yPercent: 0 })
               .set(allPhotos[index], { autoAlpha: 0 });

            ScrollTrigger.create({
               trigger: headline,
               start: 'top 80%',
               end: 'top 50%',
               animation: animation,
               scrub: true,
               markers: false,
            });
         });

         return () => {
            console.log('mobile');
         };
      });
   }, []);

   return (
      <div>
         <div className='spacer'></div>

         <div className='gallery'>
            <div className='left'>
               <div className='desktopContent'>
                  {/* Desktop Content Sections */}
                  <div className='desktopContentSection'>
                     <h1>Red</h1>
                     <p>
                        Red is a color often associated with strong emotions such as passion, love,
                        and anger...
                     </p>
                  </div>
                  {/* Repeat similar sections for Green, Pink, and Blue */}
               </div>
            </div>

            <div className='right'>
               {/* Mobile Content */}
               <div className='mobileContent'>{/* Repeat similar mobile content sections */}</div>

               {/* Desktop Photos */}
               <div className='desktopPhotos'>
                  <div className='desktopPhoto red'></div>
                  <div className='desktopPhoto green'></div>
                  <div className='desktopPhoto pink'></div>
                  <div className='desktopPhoto blue'></div>
               </div>
            </div>
         </div>

         <div className='spacer'></div>
         <div className='spacer'></div>
         <div className='spacer'></div>
      </div>
   );
};

export default Gallery;
