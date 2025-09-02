import Navbar from "./Components/Navbar";
import Features from "./Home/Features";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Intro from "./Home/Intro";
import Testimonial from "./Home/Testimonial";

function App() {
  
  return (
    <div className="App">
      <Navbar/>   
      <Hero/>
      <Intro/>
      <Features/>
      <Testimonial/>
      <Footer/>
      
    </div>
  );
}

export default App;
