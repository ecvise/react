import React, { useState } from 'react'
import Products from '../components/Products'
import CatButtons from '../components/CatButtons'
import Header from '../components/Header'
import { items } from '../data/prodcutsData'
import AddItemOffCanvas from '../components/AddItemOffCanvas'
import Swal from 'sweetalert2'
import { categories } from '../data/categories';

export default function MenuPage() {
  const [cartCounter, setCartCounter] = useState(0);
  const [currentCategory,setCurrentCategory] = useState(0);
  const [filterItems,setFilterItems] = useState(items);
  const [cart,setCart] = useState([]);   
  const [itemBeforeCart,setItemBeforeCart] = useState([]);

  const increment = () => {
    setCartCounter(cartCounter + 1);
  }
  const fncsetCurrentCategory = (id) => {
    setCurrentCategory(id);
    if(id===0)
    {
      setFilterItems([...items]);
    }else
    {
      let catitems = items.filter(item => item.category_id===id);
      setFilterItems([...catitems]);
    }

  }
  const getCategoryProducts = (id) => {
      let catitems = items.filter(item => item.category_id===id);
      return catitems;
  }

 const  addToCart = (cart,product)=>{
    // write your logic here
    let tempcart = [...cart];
    let tempproduct = {...product};
    let inCartIndex = tempcart.findIndex(cp=>cp.id===tempproduct.id);
    if(inCartIndex!==-1)
    {
       
        let inCart =  tempcart[inCartIndex];
        tempproduct.qty=inCart.qty; //+1
        tempproduct.total=(tempproduct.price*tempproduct.qty);

    }else{
        tempproduct.qty=1;
        tempproduct.total=(tempproduct.price*1);
    }

        setItemBeforeCart(tempproduct);

}

 const  actualAddToCart = (cart,product)=>{
    // write your logic here
    let tempcart = [...cart];
    let tempproduct = {...product};
    let inCartIndex = tempcart.findIndex(cp=>cp.id===tempproduct.id);
    
    
    if(inCartIndex!==-1)
    {
        tempproduct.total=(tempproduct.price*tempproduct.qty);
        tempcart[inCartIndex]= tempproduct;

    }else{
        tempproduct.total=(tempproduct.price*tempproduct.qty);
        tempcart.push( tempproduct);
    }
    //console.log(inCart);
    setCart(tempcart);
    Toast.fire({
      icon: 'success',
      title: tempproduct.title+' Added to Cart'
    })

}
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

const  directAddToCart = (cart,product)=>{
  // write your logic here
  let tempcart = [...cart];
  let tempproduct = {...product};

  let inCartIndex = tempcart.findIndex(cp=>cp.id===tempproduct.id);
  
  
  if(inCartIndex!==-1)
  {
     
      let inCart =  tempcart[inCartIndex];
      tempproduct.qty=inCart.qty+1;
      tempproduct.total=(tempproduct.price*tempproduct.qty);
      tempcart[inCartIndex]= tempproduct;

  }else{
      tempproduct.qty=1;
      tempproduct.total=(tempproduct.price*1);
      tempcart.push( tempproduct);
  }
  //console.log(inCart);
  setCart(tempcart);
  
  Toast.fire({
    icon: 'success',
    title: tempproduct.title+' Added to Cart'
  })

}

const removeFromCart = (cart, product)=>{
  // write your logic here
  let tempcart = [...cart];
  let tempproduct = {...product};
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let inCartIndex = tempcart.findIndex(cp=>cp.id===tempproduct.id);
      if(inCartIndex!==-1)
      {      
          tempcart.splice(inCartIndex,1);
      }
      setCart(tempcart);      
      Swal.fire(
        'Deleted!',
        `Item ${tempproduct.title} Removed from Cart`,
        'success'
      )
    }
  })


}

const  decrementCart= (cart, product,beforeCart=false)=> {
  // write your logic here
  let tempcart = [...cart];
  let tempproduct = {...product};

  let inCartIndex = tempcart.findIndex(cp=>cp.id===tempproduct.id);
 
  if(beforeCart===true)
  {
    if(tempproduct.qty===1)
    {
      return false;
    }

    tempproduct.qty=tempproduct.qty-1;
    tempproduct.total=(tempproduct.price*tempproduct.qty);
    setItemBeforeCart(tempproduct);
    return;
  }
  

  if(inCartIndex!==-1)
  {
      let inCart =  tempcart[inCartIndex];
       
      if(inCart.qty===1)
      {

          Swal.fire({
            title: 'Are you sure?',
            text: `Only one  ${tempproduct.title} In cart this will remove it from Cart`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              tempcart.splice(inCartIndex,1);
              setCart(tempcart);
             
              Swal.fire(
                'Deleted!',
                `Item ${tempproduct.title} Removed from Cart`,
                'success'
              )
            }
          })
          
      }   
      else
      {
        tempcart[inCartIndex].qty= tempcart[inCartIndex].qty-1;
        tempcart[inCartIndex].total=(tempcart[inCartIndex].price*tempcart[inCartIndex].qty);
        setCart(tempcart);
      }

  }
  //console.log(inCart);
 

}
const incrementCart=(cart,product,beforeCart=false)=> {
  // write your logic here
  
  let tempcart = [...cart];
  let tempproduct = {...product};

  let inCartIndex = tempcart.findIndex(cp=>cp.id===tempproduct.id);
  if(beforeCart===true)
  {
    tempproduct.qty=tempproduct.qty+1;
    tempproduct.total=(tempproduct.price*tempproduct.qty);
    setItemBeforeCart(tempproduct);
    return;
  }
  
  if(inCartIndex!==-1)
  {
         
      tempcart[inCartIndex].qty= tempcart[inCartIndex].qty+1;
      tempcart[inCartIndex].total=(tempcart[inCartIndex].price*tempcart[inCartIndex].qty);
  }
  //console.log(inCart);
  setCart(tempcart);

}

  return (
    <div className='container mb-5'>
      <Header  cart={cart}  addToCart={addToCart} removeFromCart={removeFromCart}  decrementCart={decrementCart} incrementCart={incrementCart} />
      <AddItemOffCanvas actualAddToCart={actualAddToCart} itemBeforeCart={itemBeforeCart} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}  decrementCart={decrementCart} incrementCart={incrementCart} />
      <CatButtons fncsetCurrentCategory={fncsetCurrentCategory} currentCategory={currentCategory} />
      { currentCategory===0 && 
        categories.map(function(cat) {
           let catProducts = getCategoryProducts(cat.id);
        return (
          <>  
        <div className="row m-4 ">
            <h3 className='text-danger'>{cat.title} 
              <span className="ms-2 badge rounded-pill bg-danger">
              {catProducts.length}
              </span> 
            </h3> 
            <hr className="my-4 text-danger" />
        </div>
        <Products key={currentCategory} cCat={cat.id} directAddToCart={directAddToCart}  increment={increment} filterItems={catProducts} addToCart={addToCart} cart={cart}/>
        </>
        )
      })
     
     }
     { currentCategory!==0 && 
     <Products key={currentCategory} cCat={currentCategory} directAddToCart={directAddToCart}  increment={increment} filterItems={filterItems} addToCart={addToCart} cart={cart}/>}
      
    </div>
  )
}
