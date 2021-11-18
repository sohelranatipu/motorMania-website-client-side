import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Products from './Pages/Home/Products/Products';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Pay from './Pages/Dashboard/Pay/Pay';
import Review from './Pages/Dashboard/Review/Review';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
// import AuthProvider from './Context/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
        
      <AuthProvider>
      <Router>
        <Header />
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/placeOrder">
            <PlaceOrder />
          </PrivateRoute>
           
          <Route path="/myOrder">
            <MyOrder />
          </Route>
          <Route path="/pay">
            <Pay />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer></Footer>
       </Router>
      </AuthProvider>
       
    </div>
  );
}

export default App;
