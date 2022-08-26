import React from "react";
import Logo from "../../assets/images/logo.png";
import {useNavigate} from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import useInput from "../../hooks/useInput";
import Input from "../../UI/Inputs/Input";
import PurpleBigButton from "../../UI/PurpleBigButton/PurpleBigButton";
import EyeImg from "../../assets/images/EyeImg.png";
import ClosedEye from "../../assets/images/ClosedEye.png";
import classes from './ResetPassword.module.css';
import PurpleEmptyButton from "../../UI/PurpleEmptyButton/PurpleEmptyButton";




function ResetPassword () {


    const navigate = useNavigate();
    const {isPassword} = useValidation()

    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        togglePassword: passwordShowHandler,
        passwordShown: passwordShow,
        reset: resetPassword,
    } = useInput(isPassword);

    const {
        value: confirmPasswordValue,
        isValid: confirmPasswordIsValid,
        valueChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        reset: resetConfirmPassword,
        passwordShown: confirmPasswordShow,
        togglePassword: confirmPasswordShowHandler,
        isTouched: confirmPasswordIsTouched
    } = useInput(isPassword);

    let hasError = false;
    let confirmPasswordMessage=null;
    if(password !== confirmPasswordValue){
        hasError = true;
        confirmPasswordMessage = "Passwords do not match"
    }

    let formIsValid = false;
    if (passwordIsValid
        && confirmPasswordIsValid
    ) {
        formIsValid = true;
    }


    const submitHandler = event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        resetPassword();
        resetConfirmPassword();
    };

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
                <div className={classes.resetTitleDiv}>New Password</div>
                <form onSubmit={submitHandler}>
                    <Input
                        hasError = {passwordHasError}
                        errorText="Please enter password. (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character)"
                        image= {passwordShow ? EyeImg : ClosedEye}
                        onClick={passwordShowHandler}
                        input={{
                            value: password,
                            placeholder: "Password",
                            type:passwordShow ? "text" : "password",
                            onChange: passwordChangeHandler,
                            onBlur: passwordBlurHandler,
                        }}
                    />
                    <Input
                        hasError = {hasError && confirmPasswordIsTouched}
                        errorText={confirmPasswordMessage}
                        image= {confirmPasswordShow ? EyeImg : ClosedEye}
                        onClick={confirmPasswordShowHandler}
                        input={{
                            value: confirmPasswordValue,
                            placeholder: "Confirm Password",
                            type: confirmPasswordShow ? "text" : "password",
                            onChange: confirmPasswordChangeHandler,
                            onBlur: confirmPasswordBlurHandler,
                            onKeyPress:handleKeyPress
                        }}
                    />
                    <PurpleBigButton  disabled={!formIsValid} OnClick={()=> navigate('/home')} type={"submit"}>Sent Resent Link</PurpleBigButton>
                </form>
                <PurpleEmptyButton OnClick={()=>navigate(`/resetPasswordEmail`)}>Cancel</PurpleEmptyButton>
            </div>
        </div>
    )
}


export default ResetPassword;