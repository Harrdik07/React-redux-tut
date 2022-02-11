// import React,{useEffect} from 'react';
// import axios from "axios";
// import {useSelector,useDispatch} from "react-redux";
// import {setProducts} from "../redux/actions/productActions";
// import ProductComponent from "./ProductComponent";

// const ProductListing = () => {

//     const products = useSelector((state)=>state);
//     const dispatch = useDispatch();
//         // console.log(products);
 
//         const fetchProducts = async()=>{
//             const response = await axios
//             .get("https://fakestoreapi.com/products")
//             .catch((err)=>{
//                 console.log("Err",err);
//             });
//             dispatch (setProducts(response.data));
    
//         };

//         useEffect(() => {
//             fetchProducts();
//         },[]);
//         console.log("Products :" ,products);

//     return (
//         <div>
//             <ProductComponent/>
//         </div>
//     )
// }

// export default ProductListing;

import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
