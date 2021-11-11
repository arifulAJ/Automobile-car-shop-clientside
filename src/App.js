
import './App.css';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import Home from './Pages/Home/Home';
import ExploreItems from './Pages/ExploreItems/ExploreItems';
import Login from './Pages/SignUp/Login/Login';
import Footer from './Pages/Fotter/Footer';
import NavigationBar from './Pages/Home/NavigationBar/NavigationBar';
import Resister from './Pages/SignUp/Resister/Resister';
import Placeorder from './Pages/Home/ProductService/PlaceOrder/Placeorder';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import AuthProvide from './Context/AuthProvide';
import Pay from './Pages/Home/NavigationBar/Pay/Pay';
import MyOrder from './Pages/Home/NavigationBar/MyOrder/MyOrder';
import Review from './Pages/Home/NavigationBar/Reveiw/Review';

function App() {
  return (
    <AuthProvide>
    <Router>
      <NavigationBar></NavigationBar>
   <Switch>
     <Route exact path="/">
  
          <Home />
        </Route>
     <Route  path="/home">
          <Home />
        </Route>
     <Route  path="/explore">
          <ExploreItems />
        </Route>
     <Route  path="/login">
          <Login />
        </Route>
     <Route  path="/resister">
          <Resister />
        </Route>
     <PrivetRoute  path="/placeOrder/:idmon">
          <Placeorder />
        </PrivetRoute>
       <Route path="/pay">
         <Pay></Pay>
       </Route>
       <Route path="/myorder">
         <MyOrder></MyOrder>
       </Route>
       <Route path="/review">
         <Review></Review>
       </Route>
      </Switch>
    <Footer></Footer>
  </Router>
  
  </AuthProvide>
  );
  
}

export default App;
