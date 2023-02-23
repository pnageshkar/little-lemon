// import  "../App.css"
import './specials.css';
import GreekSalad from '../../../assets/greek salad.jpg';
import Bruschetta from '../../../assets/Bruschetta.jpg';
import LemonDessert from '../../../assets/lemon dessert.jpg';
import Dish from './Dish/Dish';

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-top">
        <h2>Specials !!</h2>
        <button className="btnPrimary">Online Menu</button>
      </div>
      <div className="specials-bottom">
        <Dish
          image={GreekSalad}
          name="Greek Salad"
          price="$12.99"
          desc="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.Dressed with salt, hot pepper, and olive oil."
        />
        <Dish
          image={LemonDessert}
          name="Lemon Dessert"
          price="$8.50"
          desc="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest."
        />
        <Dish
          image={Bruschetta}
          name="Bruschetta"
          price="$16.99"
          desc="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil."
        />
      </div>
    </section>
  );
};

// {items.map((item, index) => (
//   <Card
//     key={index}
//     name={item.name}
//     price={item.price}
//     image={item.image}
//     description={item.description}
//     actionText="Buy Now"
//   />
// ))}

export default Specials;
