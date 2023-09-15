import Header from "../components/components_EN/Header"
import Hero from "../components/components_EN/Hero"
import Banner from "../components/components_EN/Banner"
import About from "../components/components_EN/About"
import Culture from "../components/components_EN/Culture"
import Team from "../components/components_EN/Team"
import Services from "../components/components_EN/Services"
import Cursor from "../components/components_EN/Cursor"
// import Form from "../components/components_EN/Form"

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
        <Services />
      </main>
      <Cursor />
      
    </>
  )
}

export default Home_EN