import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
  return (
    <>
    <Hero />
    <Navbar />
    <About />
    <Services />
    <Reviews />
    {/* <Contact /> */}
    <Footer />
    </>
  )
}

export default Home

