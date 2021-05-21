import Navbar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Search from "./Components/Search/Search";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Main />

      <Footer />
    </div>
  );
}

export default App;
