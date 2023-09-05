import React, { useRef } from "react";

export default function AddItemOffCanvas({actualAddToCart,itemBeforeCart,cart,addToCart,removeFromCart,decrementCart,incrementCart}) {
  let item = itemBeforeCart;
  return (
    <>

    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="addItemffcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
        {item.title}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div> 
      <div className="row ms-1 mb-4 d-flex">
      <div className="col-12">
        <img
          src={item.image}
          className="img-fluid rounded-3" alt={item.title} />
      </div>
      </div>  
    
        <div className="row ms-1 mb-4 d-flex">
      <div className="col-8">
            <div className="row ms-1 mb-4 d-flex">
                <div className="col-3">
                    <button className="btn btn-info px-2"
                onClick={ () => decrementCart(cart,item,true)}>
                <i className="fas fa-minus"></i>
                </button>
                </div>
                <div className="col-2"> <span style={{minWidth: "50px"}}>{item.qty} </span></div>
                <div className="col-3">
                <button className="btn btn-info px-2"
                onClick={ () => incrementCart(cart,item,true)}>
                <i className="fas fa-plus"></i>
                </button>
                </div>
            </div>
      </div>
      <div className="col-3 me-3">
        <h6 className="mb-0"> Total: {item.total}</h6>
      </div>          
     </div>
     <div className="row ms-1 ms-4 me-4 d-flex  justify-content-center">
        <button data-bs-toggle="offcanvas" data-bs-target="#addItemffcanvasRight" key={item.id} onClick={ () => actualAddToCart(cart,item)} className="btn btn-danger">Add to Cart</button>
       </div>
    </div>
    </>
  );
}
