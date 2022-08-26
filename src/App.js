import React from "react";
import Login from "./app/pages/Login/Login";
import Registration from "./app/pages/Registration/Registration";
import VerifyEmail from "./app/pages/VerifyEmail/VerifyEmail";
import ResetPassword from "./app/pages/ResetPassword/ResetPassword";
import ResetPasswordEmail from "./app/pages/ResetPasswordEmail/ResetPasswordEmail";
import ResetPasswordResentEmail from "./app/pages/ResetPasswordResentEmail/ResetPasswordResentEmail";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import ResetPasswordMessagePage from "./app/pages/ResetPasswordMessagePage/ResetPasswordMessagePage";
import Home from "./app/pages/Home/Home";
import AboutUs from "./app/pages/AboutUs/AboutUs";
import TermsAndConditions from "./app/pages/TermsAndConditions/TermsAndConditions";



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/registration" element={<Registration/>}/>
              <Route exact path="/verifyEmail" element={<VerifyEmail/>}/>
              <Route exact path="/resetPasswordEmail" element={<ResetPasswordEmail/>}/>
              <Route exact path="/resetPasswordResentEmail" element={<ResetPasswordResentEmail/>}/>
              <Route exact path="/resetPasswordMessagePage" element={<ResetPasswordMessagePage/>}/>
              <Route exact path="/resetPassword" element={<ResetPassword/>}/>
              <Route exact path="/home" element={<Home/>}/>
              <Route exact path="/aboutUs" element={<AboutUs/>}/>
              <Route exact path="/termsAndConditions" element={<TermsAndConditions/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
