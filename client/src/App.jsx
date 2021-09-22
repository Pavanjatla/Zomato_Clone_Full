import HomeLayoutHOC from "./HOC/Home.HOC";
import Homelayout from "./Layout/Home.layout";
import Temp from "./Components/temp";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <HomeLayoutHOC path="/" exact component={Temp} />
    </div>
  );
}

export default App;
