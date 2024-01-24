import { Footer, Navbar } from './components';
import { About, Contact, Hero, Projects, ServiceTools } from './pages';

function App() {
   return (
      <>
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
