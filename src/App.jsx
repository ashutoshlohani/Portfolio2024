import { Footer, Navbar } from './components';
// import CanvasComponent from './components/cursor/script';
import { About, Contact, Hero, Projects, ServiceTools } from './pages';

function App() {
   return (
      <>
         {/* <CanvasComponent /> */}
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
