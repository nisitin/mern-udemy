
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";
//Component
import Home from "./booking/Home"
import Login from "./auth/Login"
import Register from "./auth/Register"
import DashBoard from "./user/DashBoard";
import DashBoardSeller from "./user/DashBoardSeller";
import NewHotels from "./hotels/NewHotel";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={DashBoard} />
        <PrivateRoute exact path="/dashboard/seller" component={DashBoardSeller} />
        <PrivateRoute exact path="/hotels/new" component={NewHotels} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
