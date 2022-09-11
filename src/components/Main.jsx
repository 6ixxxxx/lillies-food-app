import card1 from "../assets/card-1.jpg";
import card2 from "../assets/card-2.jpg";
import card3 from "../assets/card-3.jpg";
import Card from "./Card";

function Main(props) {
     return (
          <main className="main">
               <h1>Special Meals of the day !</h1>
               <p>Check our specials of the day and get discount on all our meals <br />
               and swift delivery to whatever location in ilorin. </p>
               <div className="card-container">
                    <Card handleLoad={props.handleLoad} image={card1}  name="Stir fry Pasta" />
                    <Card handleLoad={props.handleLoad} image={card3}  name="Fried Meat" />
                    <Card handleLoad={props.handleLoad} image={card2}  name="Burger Meal" />
               </div>
          </main>
     )
}

export default Main;