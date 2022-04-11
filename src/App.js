import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Posts from "./components/Posts";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/posts" component={Posts} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
