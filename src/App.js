import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// pages
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
// components
import Header from './components/Header';
import ScrollButton from './components/ScrollButton';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Alert from './components/Alert';
import Checkout from './pages/Checkout'


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <ScrollButton />
        <Alert/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/products">
            <Products/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route
          path="/products/:id"
          children={<ProductDetails></ProductDetails>}
        ></Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
