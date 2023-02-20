import '../App.css';
import  bruschetta from '../assets/bruchetta.svg'
import order from '../assets/delivery.svg'

const Dish = () => {
  return (
    <article className="dish">
      <img src={bruschetta} alt="bruschetta" />
      <div className="dish-info">
        <div className="dish-header">
          <h3 className="dish-title">Dish Name</h3>
          <p>$ 5.99</p>
        </div>
        <p className="dish-desc">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        <div className='btnOrder'>
          Order a delivery
          <img src={order} alt="Order" display="block"/>
        
        </div>
      </div>
    </article>
  );
};
export default Dish;
