import Navbar from "../components/Navbar"
import '../App.css'
import Slider from "../components/Slider"
import About from "../components/About"
// import Experience from "../components/Experience"
import Education from "../components/Education"
import Skill from "../components/Skill"
import Prpject from "../components/Prpject"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <About/>
    <Prpject/>
    {/* <Experience/> */}
    <Education/>
    <Skill/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home