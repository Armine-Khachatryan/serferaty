import React from "react";
import Logo from "../../assets/images/logo.png";
import LetterImg from '../../assets/images/LetterImg.png';
import classes from './VerifyEmail.module.css';





function VerifyEmail () {


    return (
        <div className="entireDiv">
            <div className="loginRegisterDiv">
                <div className="logoAndSignInUp">
                    <img className="logoImg" src={Logo}/>
                    <div className="signInUp">Sign Up</div>
                </div>
                <div className="lineDiv"></div>
                <img className={classes.letterImg} src={LetterImg}/>
                <div className={classes.verifyBigText}>Please confim your e-mail address</div>
                <div className={classes.verifySmallText}>We sent a confirmation e-mail to someone@gmail.com
                    address, please check it. </div>
                <button className={classes.resentButton}>Resent e-mail</button>
            </div>
        </div>
    )
}


export default VerifyEmail;