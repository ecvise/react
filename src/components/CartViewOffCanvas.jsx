import React from "react";

export default function CartViewOffCanvas({cart,addToCart,removeFromCart,decrementCart,incrementCart}) {

  const initialValue = 0;
  const grossTotal = cart.reduce((grossTotal,item) => grossTotal + item.price * item.qty, initialValue)
  const tax      =  (grossTotal*17/100);
  const shipping =  100.00;
  const netTotal = (grossTotal)+(tax)+(shipping);
  
  
  return (
    <>
    
    <div
      className="offcanvas offcanvas-end overflow-auto"
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
        <a href="#!" className="text-muted" key={item.id} onClick={ () =>{ removeFromCart(cart,item); }}><i className="fas fa-times"></i></a>
      </div>
     </div>
     <hr className="my-4" />
      </>
      )
    })}
     
 
            <div className="m-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">{grossTotal}</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="mb-2">Shipping</p>
                <p className="mb-2">{shipping}</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="mb-2">Tax</p>
                <p className="mb-2">{tax}</p>
              </div>

              <div className="d-flex justify-content-between mb-4">
                <p className="mb-2">Total(Incl. taxes)</p>
                <p className="mb-2">{netTotal}</p>
              </div>

              <button type="button" className="btn btn-info btn-block btn-lg">
                <div className="d-flex justify-content-between">
                  <span>{netTotal}</span>
                  <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                </div>
              </button>

            </div>
    
    </div>
    </>
  );
}
