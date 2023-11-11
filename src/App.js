import {  Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import LoginPage from "./Components/LoginSignup/LoginPage";
import SignupPage from "./Components/LoginSignup/SignupPage"
import Home from "./Components/Home/Home"
import ProductDetails from "./Components/ProductDetailedView/ProductDetails";
import {Provider} from "react-redux";
import store from "./store/store"

function App() {
  return (
    <div>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductDetails />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/settings" element={<PersonalDetails />} />
        </Routes></BrowserRouter></Provider>  
    </div>
  );
}

export default App;
