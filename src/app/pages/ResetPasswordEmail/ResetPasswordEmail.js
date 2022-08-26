import React from "react";
import Logo from "../../assets/images/logo.png";
import classes from './ResetPasswordEmail.module.css';
import Input from "../../UI/Inputs/Input";
import useInput from "../../hooks/useInput";
import {useNavigate} from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import PurpleBigButton from "../../UI/PurpleBigButton/PurpleBigButton";
import PurpleEmptyButton from "../../UI/PurpleEmptyButton/PurpleEmptyButton";


function ResetPasswordEmail () {
    const navigate = useNavigate();
    const {isEmail}=useValidation();


    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    let formIsValid = false;
    if (emailIsValid) {
        formIsValid = true;
    }

    const submitHandler =  event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        navigate('/resetPasswordResentEmail');
        resetEmail();
    };

    let emailMessage =null;
    if(!email){
        emailMessage = "Email is required";
    }
    else if (!emailIsValid){
        emailMessage = "Invalid email";
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            submitHandler()
        }
    }

    return(
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
                <form onSubmit={submitHandler}>
                    <Input
                        hasError = {emailHasError}
                        errorText={emailMessage}
                        input={{
                            value: email,
                            placeholder: "Email",
                            type: "email",
                            onChange: emailChangeHandler,
                            onBlur: emailBlurHandler,
                            onKeyPress:handleKeyPress
                        }}
                    />
                    <PurpleBigButton disabled={!formIsValid} type={"submit"}>Sent Resent Link</PurpleBigButton>
                </form>
                <PurpleEmptyButton  OnClick={()=>navigate(`/login`)}>Cancel</PurpleEmptyButton>
            </div>
        </div>
    )
}


export default ResetPasswordEmail;