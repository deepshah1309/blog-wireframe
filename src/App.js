import Navbar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Search from "./Components/Search/Search";
import FAQ from "./Components/FAQ/faq";
import CreateBlog from "./Components/Create and Search Blog/CreateBlog";

import "./App.scss";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Search />
          <Main />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
