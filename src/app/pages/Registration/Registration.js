import React, {useState} from "react";
import Logo from '../../assets/images/logo.png';
import EyeImg from '../../assets/images/EyeImg.png';
import ClosedEye from '../../assets/images/ClosedEye.png';
import {useNavigate} from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import useInput from "../../hooks/useInput";
import Input from "../../UI/Inputs/Input";
import PurpleBigButton from "../../UI/PurpleBigButton/PurpleBigButton";
import PurpleEmptyButton from "../../UI/PurpleEmptyButton/PurpleEmptyButton";
import classes from './Registration.module.css';



function Registration (){


    const navigate = useNavigate();
    const {isNotEmpty, isEmail, isPassword}=useValidation();
    const [checkedDataProtection, setCheckedDataProtection] = useState(false);
    const [checkedGeneralTerms, setCheckedGeneralTerms] = useState(false);
    const [checkedAge, setCheckedAge] = useState(false);

    const {
        value: username,
        isValid: usernameIsValid,
        hasError: usernameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsername,
    } = useInput(isNotEmpty);

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);


    const {
        value: confirmEmailValue,
        isValid: confirmEmailIsValid,
        valueChangeHandler: confirmEmailChangeHandler,
        inputBlurHandler: confirmEmailBlurHandler,
        reset: resetConfirmEmail,
        isTouched: confirmEmailIsTouched
    } = useInput(isEmail);


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

    let hasPasswordError = false;
    let confirmPasswordMessage=null;
    if(password !== confirmPasswordValue){
        hasPasswordError = true;
        confirmPasswordMessage = "Passwords do not match"
    }

    let hasEmailError = false;
    let confirmEmailMessage=null;
    if(email !== confirmEmailValue){
        hasEmailError = true;
        confirmEmailMessage = "Emails do not match"
    }



    let formIsValid = false;
    if (usernameIsValid
        && emailIsValid
        && confirmEmailIsValid
        && passwordIsValid
        && confirmPasswordIsValid
        && checkedDataProtection
        && checkedGeneralTerms
        && checkedAge
    ) {
        formIsValid = true;
    }


    const submitHandler =  event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        navigate('/verifyEmail');
         resetUsername();
         resetEmail();
         resetConfirmEmail();
         resetPassword();
         resetConfirmPassword();
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
        <>
            <div className="entireDiv">
                <div className="loginRegisterDiv">
                    <div className="logoAndSignInUp">
                        <img className="logoImg" src={Logo}/>
                        <div className="signInUp">Sign Up</div>
                    </div>
                    <div className="lineDiv"></div>
                    <form onSubmit={submitHandler}>
                        <div className={classes.buttonsSmallDiv}>
                            <Input
                                hasError = {usernameHasError}
                                errorText="Please enter a Username."
                                input={{
                                    value: username,
                                    placeholder: "Username",
                                    type: "text",
                                    onChange: usernameChangeHandler,
                                    onBlur: usernameBlurHandler
                                }}
                            />
                        </div>
                        <div className={classes.buttonsSmallDiv}>
                            <Input
                                hasError = {emailHasError}
                                errorText={emailMessage}
                                input={{
                                    value: email,
                                    placeholder: "Email",
                                    type: "email",
                                    onChange: emailChangeHandler,
                                    onBlur: emailBlurHandler
                                }}
                            />
                        </div>
                        <div className={classes.buttonsSmallDiv}>
                            <Input
                                hasError = {hasEmailError && confirmEmailIsTouched}
                                errorText={confirmEmailMessage}
                                input={{
                                    value: confirmEmailValue,
                                    placeholder: "Confirm Email",
                                    type: "email",
                                    onChange: confirmEmailChangeHandler,
                                    onBlur: confirmEmailBlurHandler,
                                }}
                            />
                        </div>
                        <div className={classes.buttonsSmallDiv}>
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
                        </div>
                        <div className={classes.buttonsSmallDiv}>
                            <Input
                                hasError = {hasPasswordError && confirmPasswordIsTouched}
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
                        </div>
                        <div className={classes.checkboxDiv}>
                            <input
                                className={classes.checkboxInput}
                                type="checkbox"
                                checked={checkedDataProtection}
                                onChange={e => setCheckedDataProtection(e.target.checked)}
                            />
                            <div className={classes.checkboxText}>*
                                Yes, I agree that my personal data may be stored and processed by marbis GmbH, Griesbachstraße 10, 76185 Karlsruhe and Marbis /
                                Nitrado USA, Inc. 4600 Kietzke Lane, Reno, Nevada 89502 / USA for the purpose of using the service. My data will be used exclusively
                                for this purpose. In particular, data will not be passed on to unauthorized third parties. I am aware that I can revoke my consent at
                                any time with effect for the future. I can do this either electronically via the function 'Delete account', by e-mail: info@nitrado.net
                                or by mail to marbis GmbH, Griesbachstraße 10, 76185 Karlsruhe or Marbis / Nitrado USA, Inc. 4600 Kietzke Lane, Reno, Nevada 89502 / USA.
                                <span className={classes.checkboxBoldText}> The data protection declaration </span> of marbis GmbH applies.</div>
                        </div>
                        <div className={classes.checkboxDiv}>
                            <input
                                className={classes.checkboxInput}
                                type="checkbox"
                                checked={checkedGeneralTerms}
                                onChange={e => setCheckedGeneralTerms(e.target.checked)}
                            />
                            <div className={classes.checkboxText}>*
                                Yes, I have read and accept the
                                <span className={classes.checkboxBoldText}> general terms and conditions .</span></div>
                        </div>
                        <div className={classes.checkboxDiv}>
                            <input
                                className={classes.checkboxInput}
                                type="checkbox"
                                checked={checkedAge}
                                onChange={e => setCheckedAge(e.target.checked)}
                            />
                            <div className={classes.checkboxText}>*
                                Yes, I confirm that I am at least 16 years old or that my parents/guardians agree with the registration.</div>
                        </div>
                        <PurpleBigButton  disabled={!formIsValid} type={"submit"}>Next</PurpleBigButton>
                    </form>
                    <PurpleEmptyButton OnClick={()=>navigate(`/login`)}>Sign In </PurpleEmptyButton>
                </div>
            </div>
        </>
    )
}


export default Registration;