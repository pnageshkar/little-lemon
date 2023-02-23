import './testimonials.css'
import Testimonial from '../Testimonial/Testimonial';
import Jack from '../../../assets/man1.jpg';
import Mike from '../../../assets/man2.jpg';
import Lisa from '../../../assets/woman1.jpg';
import Jenny from '../../../assets/woman2.jpg';

const revText = [
                "Do yourself a favor and visit this lovely restaurant. The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing,everything we tasted melted in other mouths. Absolutely the best meal we had while in Chicago. ",
                "When we think about celebrations, Little Lemon is always our first option and it never disappoints. From the starter to the dessert the quality and tastes of everything is outstanding. Service is delightful and very professional",
                "Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended",
                "Stopped in for dinner and had a great meal. Staff was helpful and knowledgeable about the menu offering great recommendations. The atmosphere is cozy and pleasant. The dishes were delicious as were the wine and cocktail recommendations."
]
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="test-container">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <Testimonial rating="5" image={Jack} name = "Jack Bowman" review = {revText[0]}/>
          <Testimonial rating="5" image={Mike} name = "Mike Gibson" review = {revText[1]}/>
          <Testimonial rating="5" image={Lisa} name = "Lisa Bezos" review = {revText[2]}/>
          <Testimonial rating="5" image={Jenny} name = "Jenny M"  review = {revText[3]}/>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
