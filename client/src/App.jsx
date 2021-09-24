import HomeLayoutHOC from "./HOC/Home.HOC";
import Homelayout from "./Layout/Home.layout";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Temp from "./Components/Temp";


function App() {
  return (
    <div className="App">
      <HomeLayoutHOC path="/:type" exact component={Temp} />
    </div>
  );
}

export default App;
