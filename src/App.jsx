import "./App.css";
import About from "./componants/about/about";
import Contact from "./componants/contact/contact";
import Experience from "./componants/experience/experience";
import Footer from "./componants/footer/footer";
import Header from "./componants/header/header";
import Nav from "./componants/nav/nav";
import Portfolio from "./componants/portfolio/portfolio";
import Services from "./componants/services/services";
import Testimonials from "./componants/testimonials/testimonials";
import Scrollreveal from 'scrollreveal';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sr = Scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
      header,
        #about,
        #experience,
        #services,
        #portfolio,
        #testimonials,
        #contact,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </>;
}

export default App;
