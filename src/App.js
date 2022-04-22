import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./components/Authentication/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import ResponsiveNav from "./components/Nav/ResponsiveNav";
import Details from "./components/Home/Service/Details";
import Services from "./components/Home/Services/Services";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Footer/Footer";
import Order from "./components/Home/Order/Order";
import ManageOrders from "./components/Home/Order/ManageOrders";
import AddService from "./components/Home/AddService/AddService";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ResponsiveNav></ResponsiveNav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/Services">
              <Services></Services>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/Details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/Order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/ManageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/AddService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
