import  "../App.css"
import Dish from "./Dish"

const Specials = () => {
  return (
    <section className="specials">
        <div className="specials-top">
            <h2>Specials !!</h2>
            <button className="btnPrimary">Online Menu</button>
        </div>
        <div className="specials-bottom">
            <Dish />
            <Dish />
            <Dish />
        </div>
    </section>
  )
}

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

export default Specials