import React from "react";

export default function PagingCmp({fncSetPaging,paging}) {
   
   const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(paging.items.length / paging.perPage); i++) {
      pageNumbers.push(i);
    }


  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li className="page-item"
        key={number}
        id={number}
        onClick={()=>fncSetPaging(number)}
      >
        <button  className={`page-link ${paging.currentPage===number?'active':''}`}  >
        {number}
        </button>
      </li>
    );
  });

  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination justify-content-center mt-3">
        <li className="page-item">
          <button className="page-link" href="#" key="0" onClick={()=>fncSetPaging(paging.currentPage-1)}>
            Previous
          </button>
        </li>
        {renderPageNumbers}
        <li className="page-item">
          <button className="page-link" key="1000" href="#" onClick={()=>fncSetPaging(paging.currentPage+1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
