import './about.css'
import MarioAdrian from '../../../assets/Mario-and-Adrian.jpg'
import Restaurant from '../../../assets/restaurant.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="about-detail">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </div>
      <div className="img-about-container">
        {/* <img id="top-image" src={MarioAdrian} alt="Mario and Adrian " /> */}
        <img id="bottom-image" src={Restaurant} alt="Restaurant Seating" />
      </div>
    </section>
  )
}
export default About