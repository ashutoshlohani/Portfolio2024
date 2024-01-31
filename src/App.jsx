import { AnimatePresence } from 'framer-motion';
import { lazy, useEffect, useState, useRef } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

const Navbar = lazy(() => import('./pages/Navbar'));
const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const ServiceTools = lazy(() => import('./pages/ServiceTools'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./pages/Footer'));
const Project2 = lazy(() => import('./components/Project2'));

function App() {
   const ref = useRef(null);

   const options = {
      smooth: true,
   };

   const [isLoading, setLoading] = useState(true);
   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
   }, []);

   return (
      <>
         <AnimatePresence mode='wait'>{isLoading && <LoadingAnimation />}</AnimatePresence>
         <LocomotiveScrollProvider options={options} containerRef={ref}>
            <main data-scroll-container>
               <Navbar data-scroll-section />
               <Hero data-scroll-section />
               <About data-scroll-section />
               <ServiceTools data-scroll-section />
               {/* <Project2 /> */}
               <Projects data-scroll-section />
               <Contact data-scroll-section />
               <Footer data-scroll-section />
            </main>
         </LocomotiveScrollProvider>
      </>
   );
}

export default App;
