import HomeLayoutHOC from "./HOC/Home.HOC";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Redirect, Route } from "react-router";
import Home from "./pages/Home";
import RestaurantLayout from "./Layout/Restaurant.layout";
import RestaurantHOC from "./HOC/Restaurant.HOC";
import Temp from "./Components/Temp";
import Overview from "./pages/Overview";
import OrderOnline from "./pages/OrderOnline";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";
import Photos from "./pages/Photos";




function App() {
  return (
    <div className="App">
      <Route path="/" exact >
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantHOC path="/restaurant/:id" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantHOC path="/restaurant/:id/photos" exact component={Photos} />
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Reviews} />
    </div>
  );
}

export default App;
