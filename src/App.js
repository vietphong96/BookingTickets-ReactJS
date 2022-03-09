import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Register from "./pages/Register";
import { HomeTemPlate } from "./templates/HomeTemplate/HomeTemPlate";

export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemPlate path="/" exact Component={Home} />
        <HomeTemPlate path="/home" exact Component={Home} />
        <HomeTemPlate path="/contact" exact Component={Contact} />
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
        <HomeTemPlate path="/news" exact Component={News} />
      </Switch>
    </Router>
  );
}
