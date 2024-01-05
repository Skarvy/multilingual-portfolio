
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Whatsapp from "./components/whastapp/Whatsapp";
import { LanguageProvider } from "./context/LanguageProvider";


const App = () => {
  return (
    <div>
      <LanguageProvider>
      <Whatsapp/>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>    

      </LanguageProvider>      
     
    </div>
  );
};

export default App;
