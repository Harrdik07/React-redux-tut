// import React from 'react';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Header from "./containers/Header";
// import ProductListing from './containers/ProductListing';
// import ProductDetail from "./containers/ProductDetail";



// export const App = () => {
//   return (
//     <div className="App">
//     <Router>
//     <Header/>
//     <br/>
//     <Switch>
//       <Route path="/" exact component={ProductListing}/>
//       <Route path="/product/:productId" exact component={ProductDetail}/>
//       <Route>404  Not Found</Route>
//     </Switch>
//     </Router>
    
//     </div>
//   )
// }
// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;