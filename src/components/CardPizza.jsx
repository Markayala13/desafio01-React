function CardPizza({ picture, name, ingredients, price }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
         <img
          src={picture}
          className="card-img-top"
          alt="Pizza"
          style={{
            width: "100%",
            height: "200px", 
            objectFit: "cover", 
          }}
        />
      


    
      

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Ingredientes: {Array.isArray(ingredients) ? ingredients.join(", ") : "No especificado"}
        </p>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <a href="#" className="btn btn-primary">Ordenar</a>
      </div>
    </div>
  );
}

export default CardPizza;

