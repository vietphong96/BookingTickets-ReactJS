import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut/CheckOut";
import Contact from "./pages/Contact";
import Detail from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Register from "./pages/Register";
import { HomeTemPlate } from "./templates/HomeTemplate/HomeTemPlate";
import { UserTemPlate } from "./templates/UserTemplate";
import { AdminTemPlate } from "./templates/AdminTemPlate/AdminTemplate";
import User from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Films from "./pages/Films";
import Addnew from "./pages/Films/Addnew";
import Edit from "./pages/Films/Edit";

export const history = createBrowserHistory();

export default function App() {
  return (
    // <ModalVideoComponent />
    <Router history={history}>
      <Switch>
        <HomeTemPlate path="/" exact Component={Home} />
        <HomeTemPlate path="/home" exact Component={Home} />
        <HomeTemPlate path="/contact" exact Component={Contact} />
        <HomeTemPlate path="/detail/:id" exact Component={Detail} />
        <UserTemPlate path="/login" exact Component={Login} />
        <UserTemPlate path="/register" exact Component={Register} />
        <HomeTemPlate path="/news" exact Component={News} />
        {/* <CheckOutTemPlate
          path="/detail/checkout/:id"
          exact
          Component={CheckOut}
        /> */}

        <HomeTemPlate path="/checkout/:id" exact Component={CheckOut} />

        {/* ADmin */}

        <AdminTemPlate path="/admin" exact Component={User} />
        <AdminTemPlate path="/admin/user" exact Component={User} />
        <AdminTemPlate path="/admin/dashboard" exact Component={Dashboard} />
        <AdminTemPlate path="/admin/films" exact Component={Films} />
        <AdminTemPlate path="/admin/films/addnew" exact Component={Addnew} />
        <AdminTemPlate path="/admin/films/edit/:id" exact Component={Edit} />
        <Route path="*" exact component={Home} />
      </Switch>
    </Router>
  );
}
