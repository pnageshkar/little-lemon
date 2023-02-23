import About from "../components/Home/About/About"
import Hero from "../components/Home/Hero/Hero"
import Specials from "../components/Home/Specials/Specials"
import Testimonials from "../components/Home/Testimonials/Testimonials"

const Home = () => {
  return (
    <>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
    </>
  )
}
export default Home