import React from "react";
import classes from './Header.module.css';
import Logo from "../../assets/images/logo.png";
import DownVector from "../../assets/images/DownVector.png";
import Dollar from "../../assets/images/Dollar.png";



function Header () {


    return(
        <div className={classes.header}>
            <img className="logoImg" src={Logo}/>
            <div className={classes.middle}>
                <div className={classes.middlePart}>PRODUCTS</div>
                <div className={classes.middlePart}>NEWS</div>
                <div className={classes.middlePart}>COMPANY
                <img className={classes.downVectorDiv} src={DownVector} alt="downVector"/>
                </div>
                <div className={classes.middlePart}>SUPPORT</div>
            </div>
            <div className={classes.lastDiv}>
                <div className={classes.lastPart}>ENGLAND
                    <span className={classes.justLine}></span>
                    <img className={classes.currencyIcon} src={Dollar}  alt="currencyIcon"/>
                <img className={classes.downVectorDiv} src={DownVector} alt="downVector"/></div>
                <div className={classes.lastPart}>SIGN IN</div>
            </div>
        </div>
    )
}

export default Header;