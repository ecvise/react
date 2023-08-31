import React from 'react';
import KfcCard from './KfcCard';


export default function Products({increment,filterItems,addToCart,cart}) {
    return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
    {
        filterItems.map(item => <KfcCard key={item.id} item={item} increment={increment} addToCart={addToCart} cart={cart}/>)
    }
    </div>
  )
}
