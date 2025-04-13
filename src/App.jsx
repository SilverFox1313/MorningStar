import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Tutorial from "./components/Tutorial"

const App = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar/>
      <Hero/>
      <Tutorial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
