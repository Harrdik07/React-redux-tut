// import {combineReducers} from "redux";
// import {productReducer ,selectedProductReducer} from "./productReducer";


// const reducers = combineReducers({
//     allProducts : productReducer,
//     product : selectedProductReducer,
// });

// export default reducers;

import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;