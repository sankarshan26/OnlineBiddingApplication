import {  Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import LoginPage from "./Components/LoginSignup/LoginPage";
import SignupPage from "./Components/LoginSignup/SignupPage"
import Home from "./Components/Home/Home"
import ProductDetails from "./Components/ProductDetailedView/ProductDetails";
import {Provider} from "react-redux";
import store from "./store/store";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
// import {useEffect, useState} from "react" ;

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("https://black-intern-bnsow.pwskills.app:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.me));
  // }, []);
  return (
    <div>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/settings" element={<PersonalDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />

        </Routes></BrowserRouter></Provider>  
        {/* {message} */}
    </div>
  );
}

export default App;
