import React from "react";

export default function CartViewOffCanvas({cart,addToCart,removeFromCart,decrementCart,incrementCart}) {


  return (
    <>
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cartviewoffcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Cart Items ({cart.length})
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div> 
      
      {cart.map(function(item) {
      return (
        <>
        <div className="row ms-1 mb-4 d-flex">
        <div className="col-md-2 col-lg-2 col-xl-2">
        <img
          src={item.image}
          className="img-fluid rounded-3" alt={item.title} />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">{item.title}</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button className="btn btn-link px-2"
           onClick={ () => decrementCart(cart,item)}>
          <i className="fas fa-minus"></i>
        </button>
        <span>{item.qty} </span>
        <button className="btn btn-link px-2"
          onClick={ () => incrementCart(cart,item)}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">{item.total}</h6>
      </div>          
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" className="text-muted" key={item.id} onClick={ () => removeFromCart(cart,item)}><i className="fas fa-times"></i></a>
      </div>
     </div>
      </>
      )
    })}
     

     

         
    </div>
    </>
  );
}
