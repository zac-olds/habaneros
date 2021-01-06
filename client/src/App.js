// SCREENS
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductCreate from "./screens/ProductCreate/ProductCreate";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/Signup/SignUp";
import SignOut from "./screens/SignOut/SignOut";

// DEPENDENCIES
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { verifyUser } from "./services/users";

// STYLING
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        {/* LANDING SCREEN/HOME */}
        <Route exact path="/">
          {/* <Home/> */}
        </Route>

        {/* PRODUCTS LIST */}
        <Route exact path="/products">
          {/* <Products/> */}
        </Route>

        {/* PRODUCT DETAIL */}
        <Route path="/products/:id">
          {/* <ProductDetail/> */}
        </Route>

        {/* PRODUCT CREATE */}
        <Route path="/add-product">
          {/* <ProductCreate/> */}
        </Route>

        {/* PRODUCT EDIT */}
        <Route path="/products/:id/edit">
          {/* <ProductEdit/> */}
        </Route>

        {/* SIGN IN */}
        <Route path="/sign-up">
          {/* <SignIn/> */}
        </Route>

        {/* SIGN UP */}
        <Route path="/sign-up">
          {/* <SignUp/> */}
        </Route>

        {/* SIGN OUT */}
        <Route path="/sign-out">
          {/* <SignOut/> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
