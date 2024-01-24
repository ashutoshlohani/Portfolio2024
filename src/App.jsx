import { Footer, Navbar } from './components';
// import AnimatedSphere from './components/anime/anime';
// import YourComponent from './components/anime/anime';
// import CanvasComponent from './components/cursor/script';
import { About, Contact, Hero, Projects, ServiceTools } from './pages';

function App() {
   return (
      <>
         {/* <CanvasComponent /> */}
         {/* <AnimatedSphere /> */}
         <Navbar />
         <Hero />
         <About />
         <ServiceTools />
         <Projects />
         <Contact />
         <Footer />
      </>
   );
}

export default App;
