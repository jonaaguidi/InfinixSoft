import Header from "../components/components_EN/Header"
import Hero from "../components/components_EN/Hero"
import Banner from "../components/components_EN/Banner"
import About from "../components/components_EN/About"
import Culture from "../components/components_EN/Culture"
import Team from "../components/components_EN/Team"
import Services from "../components/components_EN/Services"
import Projects from "../components/components_EN/Projects"
import Projects_Cards from "../components/components_EN/Projects_Cards"
import Partners from "../components/components_EN/Partners"
import Blog from "../components/components_EN/Blog"
import Footer from "../components/components_EN/Footer"

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
        <div id='stars4'></div>
        <Services />
        <Projects />
        <div id='stars5'></div>
        <Projects_Cards />
        <Partners />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default Home_EN