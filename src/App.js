import Products from "./components/Product/Products";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";

function App() {
  const token = useSelector((state) => state.login.token);
  const sessToken = window.sessionStorage.getItem("token");
  if (!token && !sessToken) {
    return <Login />;
  }

  token && window.sessionStorage.setItem("token", token);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/SignIn" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
