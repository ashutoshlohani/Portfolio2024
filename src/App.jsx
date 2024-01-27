import { lazy, useEffect, useState } from 'react';
import Loader from './components/loader/Loader';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const ServiceTools = lazy(() => import('./pages/ServiceTools'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         {loading ? (
            <Loader />
         ) : (
            <main>
               <Navbar />
               <Hero />
               <About />
               <ServiceTools />
               <Projects />
               <Contact />
               <Footer />
            </main>
         )}

         {/* {loading && <Loader />}
         <main>
            <Navbar />
            <Hero />
            <About />
            <ServiceTools />
            <Projects />
            <Contact />
            <Footer />
         </main> */}
      </>
   );
}

export default App;
