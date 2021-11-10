
import './App.css';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import Home from './Pages/Home/Home';
import ExploreItems from './Pages/ExploreItems/ExploreItems';
import Login from './Pages/SignUp/Login/Login';
import Footer from './Pages/Fotter/Footer';
import NavigationBar from './Pages/Home/NavigationBar/NavigationBar';

function App() {
  return (
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
    
      </Switch>
    <Footer></Footer>
  </Router>

  );
}

export default App;
