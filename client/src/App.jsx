import React, { useEffect } from "react";
import HomeLayoutHOC from "./HOC/Home.HOC";
import { Redirect, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./Redux/Reducer/User/user.action";


import Home from "./pages/Home";
import RestaurantLayout from "./Layout/Restaurant.layout";
import RestaurantHOC from "./HOC/Restaurant.HOC";

import Overview from "./pages/Overview";
import OrderOnline from "./pages/OrderOnline";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";
import Photos from "./pages/Photos";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";
import Checkout from "./pages/Checkout";
import RestaurantRedirect from "./pages/RestaurantRedirect";
import GoogleAuth from "./pages/GoogleAuth";




function App() {
   const dispatch = useDispatch();

   useEffect(() => {
    if (localStorage.zomatoUser) dispatch(getMySelf());
  }, []);

  return (
    <div className="App">
      <Route path="/" exact >
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
      <Route path="/restaurant/:id" exact component={RestaurantRedirect} />
      <RestaurantHOC path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantHOC path="/restaurant/:id/photos" exact component={Photos} />
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Reviews} />
      <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />
    </div>
  );
}

export default App;
