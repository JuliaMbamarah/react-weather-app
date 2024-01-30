import "./styles.css";
import Unit from "./Units";
import Search from "./Search";
import Footer from "./Footer";
import Description from "./Description";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Description />
            <Unit />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
