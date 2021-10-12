
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import WaiterView from "./Components/WaiterView";





function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/waiterview">
          <WaiterView/>
        </Route>
        <Route path="/pagenotfound">
          {/* <PageNotFound/> */}
        </Route>
      </Switch>
    </Router>
  );
};
  

export default App;
