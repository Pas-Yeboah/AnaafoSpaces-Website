import Navbar from "./components/ui/Navbar"
import HeroSection from "./components/ui/HeroSection"
import Section1 from "./components/ui/Section1"
import Slider from "./components/core/Slider"
import Spaces from "./components/ui/Spaces"
import Programmes from "./components/ui/Programmes"
import './index.css'
import CTA from "./components/ui/CTA"
import Testimonial from "./components/ui/Testimonial"
import { Footer } from "./components/ui/Footer"



function App() {
  

  return (
    
    <>
   <Navbar name="AnaafoSpaces"/>
    <HeroSection/>
    <Section1/>
    <Spaces/>
    <Programmes/>
    <CTA/>
    <Testimonial/>
    <Footer/>
    
    
   </> 
  )
}

export default App
