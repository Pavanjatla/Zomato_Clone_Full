import HomeLayoutHOC from "./HOC/Home.HOC";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Redirect, Route } from "react-router";
import Home from "./pages/Home";
import RestaurantLayout from "./Layout/Restaurant.layout";
import RestaurantHOC from "./HOC/Restaurant.HOC";
import Temp from "./Components/Temp";


function App() {
  return (
    <div className="App">
      <Route path="/" exact >
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantHOC path="/restaurant/:id" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/overview" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/menu" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/photos" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Temp} />
    </div>
  );
}

export default App;
