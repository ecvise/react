import { categories } from '../data/categories';

export default function CatButtons({fncsetCurrentCategory,currentCategory}) {
 
  
  return (
    categories.map(category => (
      <>
       <button key={category.id} onClick={()=>(fncsetCurrentCategory(category.id))} type="button" className={currentCategory==category.id?'btn-success btn m-2 ':'btn btn-light m-2 '}>
        {category.title}
      </button>
      </>
    ))
  );
}
