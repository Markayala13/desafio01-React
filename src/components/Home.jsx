import CardPizza from "./CardPizza";


function Home() {
   
  const pizzas=[
  
  
  {

  picture: "src/assets/img/2024-10-23-10-03-32-576x432.jpeg",

  name :"Napolitana",
  ingredients: ["mozarella", "tomates", "jamon","oregano"],
  price:5950,
  },

  {
    picture: "src/assets/img/istockphoto-1442417585-612x612.jpg",

    name :"Peperoni",
    ingredients: ["mozarella", "Peperoni","oregano"],
    price:4950,

  },

  {
    picture: "src/assets/img/istockphoto-1493116898-612x612.jpg",

    name :"Cuatro Quesos",
    ingredients: ["mozarella", "gorgonzola", "parmesano","provolone"],
    price:5950,
 },

  {
    picture: "src/assets/img/2024-10-23-10-08-36-576x432.jpeg",

    name :"Vegetariana",
    ingredients: ["mozarella", "pimientos", "aceitunas","champinones"],
    price:5950,


  }


]


return(

  <div>
      <div style={{textAlign:"center",paddingBottom: "5em", paddingTop: "50px"}}>

<h1>Bienvenido a la Pizzeria Mama Mia</h1>
</div>


<div className="container d-flex  flex-wrap gap-3">

  {pizzas.map((pizza,index) =>(

<CardPizza

key={index}
picture={pizza.picture}
name={pizza.name}
ingredients={pizza.ingredients}
price={pizza.price}
  />



  ))}
</div>




  </div>
);

  }
  
  export default Home;