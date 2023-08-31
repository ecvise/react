import React, { useState } from 'react'
import Products from '../components/Products'
import CatButtons from '../components/CatButtons'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { items } from '../data/prodcutsData';

export default function MenuPage() {
  const [cartCounter, setCartCounter] = useState(0);
  const [currentCategory,setCurrentCategory] = useState(0);
  const [filterItems,setFilterItems] = useState(items);
  const [cart,setCart] = useState([]);

  const increment = () => {
    setCartCounter(cartCounter + 1);
  }
  const fncsetCurrentCategory = (id) => {
    setCurrentCategory(id);
    let catitems = items.filter(item => item.category_id==id);
    setFilterItems([...catitems]);
  }


 const  addToCart = (cart,product)=>{
    // write your logic here
    let tempcart = [...cart];
    let tempproduct = {...product};

    let inCartIndex = tempcart.findIndex(cp=>cp.id==tempproduct.id);
    
    
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

}
const removeFromCart = (cart, product)=>{
  // write your logic here
  let tempcart = [...cart];
  let tempproduct = {...product};

  let inCartIndex = tempcart.findIndex(cp=>cp.id==tempproduct.id);
  
  
  if(inCartIndex!==-1)
  {      
      tempcart.splice(inCartIndex,1);
  }

  setCart(tempcart);
}

const  decrementCart= (cart, product)=> {
  // write your logic here
  let tempcart = [...cart];
  let tempproduct = {...product};

  let inCartIndex = tempcart.findIndex(cp=>cp.id==tempproduct.id);
  
  
  if(inCartIndex!==-1)
  {
      let inCart =  tempcart[inCartIndex];
       
      if(inCart.qty==1)
      {      
          tempcart.splice(inCartIndex,1);
      }   
      else
      {
      tempcart[inCartIndex].qty= tempcart[inCartIndex].qty-1;
      }

  }
  //console.log(inCart);
  setCart(tempcart);

}
const incrementCart=(cart,product)=> {
  // write your logic here
  let tempcart = [...cart];
  let tempproduct = {...product};

  let inCartIndex = tempcart.findIndex(cp=>cp.id==tempproduct.id);
  
  
  if(inCartIndex!==-1)
  {
         
      tempcart[inCartIndex].qty= tempcart[inCartIndex].qty+1;

  }
  //console.log(inCart);
  setCart(tempcart);

}

  return (
    <div className='container mb-5'>
      <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}  decrementCart={decrementCart} incrementCart={incrementCart} />
      <CatButtons fncsetCurrentCategory={fncsetCurrentCategory} currentCategory={currentCategory} />
      <Products increment={increment} filterItems={filterItems} addToCart={addToCart} cart={cart}/>
      <Footer />
    </div>
  )
}
