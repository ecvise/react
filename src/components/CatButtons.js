import { categories } from '../data/categories';

export default function CatButtons({fncsetCurrentCategory,currentCategory}) {
 
 return (
  <>
    <button key={0} onClick={()=>(fncsetCurrentCategory(0))} type="button" className={`btn me-2 mb-3 ${currentCategory==0?'btn-success':'btn-light'}`} >
      All
    </button>
  {categories.map(function(category) {
    return (
      <button key={category.id} onClick={()=>(fncsetCurrentCategory(category.id))} type="button" className={`btn me-2 mb-3 ${currentCategory==category.id?'btn-success':'btn-light'}`} >
      {category.title}
    </button>
    )
  })}
 </> 
 )
  
}
