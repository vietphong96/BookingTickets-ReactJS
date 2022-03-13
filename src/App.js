import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import CardFilm from "./components/CardFilm/CardFilm";
import CheckOut from "./pages/CheckOut/CheckOut";
import Contact from "./pages/Contact";
import Detail from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Register from "./pages/Register";
import { HomeTemPlate } from "./templates/HomeTemplate/HomeTemPlate";
import { UserTemPlate } from "./templates/UserTemplate";
import CheckOutTemPlate from "./templates/CheckOutTemplate/CheckOutTemlate";

export const history = createBrowserHistory();
const CheckOutTemPlateLazy = lazy(() =>
  import("./templates/CheckOutTemplate/CheckOutTemlate")
);

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemPlate path="/" exact Component={Home} />
        <HomeTemPlate path="/home" exact Component={Home} />
        <HomeTemPlate path="/contact" exact Component={Contact} />
        <HomeTemPlate path="/detail/:id" exact Component={Detail} />
        <UserTemPlate path="/login" exact Component={Login} />
        <Route path="/register" exact component={Register} />
        <HomeTemPlate path="/news" exact Component={News} />
        {/* <CheckOutTemPlate
          path="/detail/checkout/:id"
          exact
          Component={CheckOut}
        /> */}

        <Suspense fallback={<h1>Loading...</h1>}>
          <CheckOutTemPlateLazy
            path="/checkout/:id"
            exact
            Component={CheckOut}
          ></CheckOutTemPlateLazy>
        </Suspense>
      </Switch>
    </Router>
  );
}
