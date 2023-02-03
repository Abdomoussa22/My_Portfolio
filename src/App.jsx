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
function App() {
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
