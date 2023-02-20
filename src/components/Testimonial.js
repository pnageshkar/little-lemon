import '../App.css';
import  person from '../assets/christina.jpg'
import Rating from './Rating';

const Testimonial = () => {
  return (
    <article className="testimonial-card">
      <Rating rating="5" />
      <div className="reviewer">
        <img className="img-reviewer" src={person} alt="Reviewer" />
        <p>Name</p>
      </div>
      <p>Do yourself a favor and visit this lovely restaurant in (CN). The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing – everything we tasted melted in other mouths. </p>
    </article>
  );
};





export default Testimonial;
