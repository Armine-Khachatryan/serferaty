import React from "react";
import Logo from "../../assets/images/logo.png";
import {useNavigate} from "react-router-dom";
import PurpleBigButton from "../../UI/PurpleBigButton/PurpleBigButton";
import PurpleEmptyButton from "../../UI/PurpleEmptyButton/PurpleEmptyButton";
import classes from "../ResetPasswordEmail/ResetPasswordEmail.module.css";




function ResetPasswordResentEmail () {
    const navigate = useNavigate();
    return (
        <div className="entireDiv">
            <div className="loginRegisterDiv">
                <div className="logoAndSignInUp">
                    <img className="logoImg" src={Logo}/>
                    <div className="signInUp">Sign Up</div>
                </div>
                <div className="lineDiv"></div>
                <div className={classes.resetPassTexts}>
                    <div className={classes.resetPassTitle}>Reset Password</div>
                    <div className={classes.resetPassText}>We will sent to you an e-mail to someone@gmail.com.
                        Check your email for continue the proccess </div>
                </div>
                <PurpleBigButton OnClick={()=>navigate(`/resetPasswordMessagePage`)}>Sent Resent Link</PurpleBigButton>
                <PurpleEmptyButton  OnClick={()=>navigate(`/resetPasswordEmail`)}>Cancel</PurpleEmptyButton>
            </div>
        </div>
    )

}

export default ResetPasswordResentEmail;
