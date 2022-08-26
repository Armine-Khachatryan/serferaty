import React, {useEffect, useState} from "react";
import PurpleBigButton from '../../UI/PurpleBigButton/PurpleBigButton';
import useValidation from '../../hooks/useValidation';
import useInput from "../../hooks/useInput";
import Input from "../../UI/Inputs/Input";
import {useNavigate} from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import EyeImg from '../../assets/images/EyeImg.png';
import ClosedEye from '../../assets/images/ClosedEye.png';
import classes from './Login.module.css';
import SmallButton from "../../UI/SmallButton/SmallButton";


function Login (props) {


    const navigate = useNavigate();
    const {isPassword, isNotEmpty} = useValidation();
    const [loginError, setLoginError] = useState(null);


    const {
        value: username,
        isValid: usernameIsValid,
        hasError: usernameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsername,
        isTouched: usernameIsTouched
    } = useInput(isNotEmpty);


    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        togglePassword: passwordShowHandler,
        passwordShown: passwordShow,
        reset: resetPassword,
        isTouched: passwordIsTouched
    } = useInput(isPassword);


    let formIsValid = false;
    if (usernameIsValid
        && passwordIsValid
    ) {
        formIsValid = true;
    }



    useEffect(() => {

        if(usernameIsTouched || passwordIsTouched){
            setLoginError("")
        }

    },[usernameIsTouched, passwordIsTouched]);


    const submitHandler =  event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        navigate(`/home`);
        resetUsername();
        resetPassword();
    }


    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            submitHandler()
        }
    }


return (
        <>
            <div className="entireDiv">
                <div className="loginRegisterDiv">
                    <div className="logoAndSignInUp">
                        <img className="logoImg" src={Logo}/>
                        <div className="signInUp">Sign In</div>
                    </div>
                    <div className="lineDiv"></div>
                    <form onSubmit={submitHandler}>
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
                            <Input
                                loginError={loginError}
                                hasError={passwordHasError}
                                errorText="Please enter password. (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character)"
                                onClick={passwordShowHandler}
                                image= {passwordShow ? EyeImg : ClosedEye}
                                input={{
                                    value: password,
                                    // value: "zxcVBN123*",
                                    placeholder: "Password",
                                    type: passwordShow ? "text" : "password",
                                    onChange: passwordChangeHandler,
                                    onBlur: passwordBlurHandler,
                                    onKeyPress: handleKeyPress
                                }}
                            />
                        <PurpleBigButton disabled={!formIsValid} type={"submit"}>Log In</PurpleBigButton>
                        {loginError && <div className={classes.loginError}>{loginError}</div>}
                    </form>
                    <div className={classes.buttonsDiv}>
                        <SmallButton OnClick={()=>navigate(`/resetPasswordEmail`)}>Forgot password?</SmallButton>
                        <SmallButton OnClick={()=>navigate(`/registration`)}>Sign Up</SmallButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;