import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes ,Route } from 'react-router-dom';
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Register from "./component/Register";
import Contact from "./component/Contact";
//import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/roducts/:id' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
     
    </>
  );
}

export default App;

/*
 
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      */