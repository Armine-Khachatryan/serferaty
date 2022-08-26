import React from "react";
import classes from './ResetPasswordMessagePage.module.css';
import {useNavigate} from "react-router-dom";


function ResetPasswordMessagePage (){
 const navigate=useNavigate();

    return (
        <div className={classes.wholePage}>
            <div className={classes.resetMessageDiv}>
                <div className={classes.helloDiv}>Hello</div>
                <div className={classes.resetTextDiv}>You are receiving this email because we are received a password
                    reset request for your account </div>
                <button className={classes.resetButton} onClick={()=>navigate(`/resetPassword`)}>Reset password</button>
                <div className={classes.resetTextDiv}>This password link will expire in 60 minutes.</div>
                <div className={classes.resetTextDiv}>If you did not request a password reset, no future actions is required.</div>
                <div className={classes.resetTextDiv}>Regards: Future Players</div>
            </div>
        </div>
    )
}

export default ResetPasswordMessagePage;