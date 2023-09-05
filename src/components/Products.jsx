import React, { useState } from 'react';
import KfcCard from './KfcCard';
import PagingCmp from '../components/PagingCmp'


export default function Products({cCat,directAddToCart,increment,filterItems,addToCart,cart}) {

  //let perPage = cCat===0?1000:4;
  let perPage =4;

  const [paging,setPaging] = useState({perPage:perPage,currentPage: 1,noOfPages:0,start:0,end:3,items:filterItems,currentFilterItems:[]});
  const indexOfLast = paging.currentPage * paging.perPage;
  const indexOfFirst = indexOfLast - paging.perPage;
  const currentFilterItems = paging.items.slice(indexOfFirst, indexOfLast);
  
  const fncSetPaging = (cPage)=>{
    let varNewPaging={...paging}
    if(!((varNewPaging.currentPage===1 && cPage===0) ||(cPage >= (varNewPaging.items.length/varNewPaging.perPage)+1)))
    {
      varNewPaging.currentPage =cPage
      setPaging(varNewPaging) 
    }

  }
 // const showPaging =filterItems.length>paging.perPage && cCat!==0;
 const showPaging =filterItems.length>paging.perPage
    return (
      <>
    <div className="row row-cols-1 row-cols-md-4 g-4">
    {
        currentFilterItems.map(item => <KfcCard key={item.id} item={item} increment={increment} directAddToCart={directAddToCart} addToCart={addToCart} cart={cart}/>)
    }
    </div>
    { showPaging && 
     <PagingCmp key={cCat} fncSetPaging={fncSetPaging} paging={paging}/>
     }
     </>
  )
}
