// SCREENS
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductCreate from "./screens/ProductCreate/ProductCreate";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import SignOut from "./screens/SignOut/SignOut";

// DEPENDENCIES
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";

// STYLING
import './App.css';


function App() {
  // Set the state for user authentication (sign up, sign in, etc)
  const [user, setUser] = useState(null);

  // Verify user/set user for use in sign up, sign in etc.
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null)
    }
    fetchUser();
  }, [])

  // Set up function for sign out
  const clearUser = () => setUser(null);

  return (
    <div className="App">
      <Switch>
        {/* LANDING SCREEN/HOME */}
        <Route exact path="/">
          <Home
          user={user}
          />
        </Route>

        {/* PRODUCTS LIST */}
        <Route exact path="/products">
          <Products
          user={user}
          />
        </Route>

        {/* PRODUCT DETAIL */}
        <Route exact path="/products/:id">
          <ProductDetail
          user={user}
          />
        </Route>

        {/* PRODUCT CREATE */}
        <Route exact path="/add-product">
          {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up"/>}
        </Route>

        {/* PRODUCT EDIT */}
        <Route exact path="/products/:id/edit">
          {user ? <ProductEdit user={user} /> : <Redirect to="/" />}
        </Route>

        {/* SIGN IN */}
        <Route path="/sign-in">
          <SignIn
            setUser={setUser}
          />
        </Route>

        {/* SIGN UP */}
        <Route path="/sign-up">
          <SignUp
            setUser={setUser}
          />
        </Route>

        {/* SIGN OUT */}
        <Route path="/sign-out">
          <SignOut
            setUser={setUser}
            clearUser={clearUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
