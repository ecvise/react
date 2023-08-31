import React from "react";

export default function KfcCard({item, increment,addToCart,cart}) {
  return (
    <div className="col">
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt="kfc card" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
            {item.desc}
        </p>
        <div className="mb-2" ><span className="badge text-bg-info">Rs. {item.price}</span></div>
        <button className="btn btn-primary" key={item.id} onClick={ () => addToCart(cart,item)}>
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}
