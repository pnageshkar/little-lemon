// import '../App.css';
import './testimonial.css';

import Rating from '../../Rating';

const Testimonial = (props) => {
  return (
    <article className="testimonial-card">
      <Rating rating={props.rating} className="size" />
      <div className="reviewer">
        <img className="img-reviewer" src={props.image} alt={props.name} />
        <p>{props.name}</p>
      </div>
      <div className="review">
        <p>{props.review}</p>
      </div>
    </article>
  );
};

export default Testimonial;
