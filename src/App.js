import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  
  return (
    <div >
       <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
              <Shop></Shop>
          </Route>
          <Route path="/review">
              <Review></Review>
          </Route>
          <Route path="/manage">
              <Manage></Manage>
          </Route>
          <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
