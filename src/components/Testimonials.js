import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="test-container">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
