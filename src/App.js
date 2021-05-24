import Navbar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Search from "./Components/Search/Search";
import Blog from "./Components/blog/blog";
import FAQ from "./Components/FAQ/faq";


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
        <Route exact path="/blog/:id">
          <Blog />
        </Route>
        <Route exact path="/blogs">
          <Main/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
