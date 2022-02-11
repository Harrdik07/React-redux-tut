// import React from "react";
// import { useSelector } from "react-redux";
// import {Link} from "react-router-dom"; 

// const ProductComponent = () => {
//   const products = useSelector((state) => state.allProducts.products);
//   const renderList = products.map((product)=>{
//       const {id , title ,image , price ,category} = product;
//       return(
    
// //     <div className="row" style={{display:"flex",flexWrap:"wrap"}} key={id}>
// //     <div class="row row-cols-1 row-cols-md-1 g-4">
// //     <div className="card" style={{width:"220px"}}>
// //     <img src={image} className="card-img-top" alt={title} style={{width:"200px",height:"250px"}}/>
// //       <div className="card-body">
// //         <h5 className="card-title">{title}</h5>
// //         <p className="card-text">${price}</p>
// //         <p className="card-text">{category}</p>
// //         {/* <a href="#" class="btn btn-primary">Submit</a> */}
// //       </div>
// //     </div>
// //   </div>
// // </div>

// <div className ="four columan wide"  key={id}>
// <Link to={`/product/${id}`}>
//   <div className="ui link cards">
//   <div className="card" style={{width:"200px"}}>
//     <div className="image">
//       <img src={image} alt={title} style={{width:"200px",height:"250px"}}/>
//     </div>
//     <div className="content">
//       <div className="header">{title}</div>
//       <div className="meta price">${price}</div>
//       <div className="meta">{category}</div>
//     </div>
//   </div>
// </div>
// </Link>
// </div>

//       )
//   })
//   return (
//     <>
// {renderList}
//   </>
    
//   )
// };

// export default ProductComponent;


import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;