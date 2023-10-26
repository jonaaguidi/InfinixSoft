import Header from "../components/Header"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/About"
import Culture from "../components/Culture"
import Team from "../components/Team"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Partners from "../components/Partners"
import Blog from "../components/Blog"
import Testimonials from "../components/Testimonials"
import PreFooter from "../components/PreFooter"
import Footer from "../components/Footer"


const Home_EN = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero /> 
        <Banner />
        <About />
        <Culture />
        <Team />
        <Projects />
        <Services />
        <Partners />
        <Testimonials /> 
        <Blog />
        <PreFooter />
      </main>
      <Footer />
    </>
  )
}

export default Home_EN