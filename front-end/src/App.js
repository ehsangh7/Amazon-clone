
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    	<div className="app">
        <Header />
    	  <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Home} />

        </Switch>
    	</div>
    </Router>
  );
}

export default App;
