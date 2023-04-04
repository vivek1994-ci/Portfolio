import Navbar from "./Component/Navbar/Navbar";
import './App.css' 
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";
import FloatingDiv from "./Component/FloatingDiv/FloatingDiv";
import Experience from "./Component/Experience/Experience";
import Works from "./Component/Works/Works";
import Portfolio from "./Component/Portfolio/Portfolio";
import Testimonial from "./Component/Testimonials/Testimonial";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <FloatingDiv/>
       <Works/>
       <Portfolio/>
       <Testimonial/>
       <Contact/>
    </div>
  );
}

export default App;
