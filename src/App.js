import Navbar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Search from "./Components/Search/Search";
import FAQ from "./Components/FAQ/faq";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{background:`url('%PUBLIC_URL%/Assets/component1.svg')`}}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
