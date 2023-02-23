// import '../App.css';
import './dish.css'
import order from '../../../../assets/delivery.svg'

const Dish = (props) => {
  return (
    <article className="dish">
      <img src={props.image} alt={props.name} />
      <div className="dish-info">
        <div className="dish-header">
          <h3 className="dish-title">{props.name}</h3>
          <p>{props.price}</p>
        </div>
        <p className="dish-desc">{props.desc}</p>
        <div className='btnOrder'>
          Order a delivery
          <img src={order} alt="Order" display="block"/>
        </div>
      </div>
    </article>
  );
};
export default Dish;
