import HomeLayoutHOC from "./HOC/Home.HOC";
import Homelayout from "./Layout/Home.layout";
import Temp from "./Components/temp";

function App() {
  return (
    <div className="App">
      <HomeLayoutHOC path="/:type" exact component={Temp} />
    </div>
  );
}

export default App;
