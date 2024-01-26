import { lazy } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const ServiceTools = lazy(() => import('./pages/ServiceTools'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
   return (
      <>
         <>
            <Navbar />
            <Hero />
            <About />
            <ServiceTools />
            <Projects />
            <Contact />
            <Footer />
         </>
      </>
   );
}

export default App;
