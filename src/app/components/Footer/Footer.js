import React from "react";
import classes from './Footer.module.css';
import Logo from "../../assets/images/logo.png";
import Facebook from "../../assets/images/Facebook.png";
import Github from "../../assets/images/Github.png";
import Youtube from "../../assets/images/Youtube.png";
import Twitter from "../../assets/images/Twitter.png";
import Instagram from "../../assets/images/Instagram.png";
import Discad from "../../assets/images/Discad.png";




function Footer () {


    return(
        <div className={classes.footer}>
            <img className="logoImg" src={Logo}/>
            <div className={classes.middleFooter}>
                <div className={classes.middlePartFooter}>About us</div>
                <div className={classes.middlePartFooter}>Terms & Conditions</div>
                <div className={classes.middlePartFooter}>Data Privacy</div>
                <div className={classes.middlePartFooter}>Support</div>
                <div className={classes.middlePartFooter}>Our Data Center</div>
            </div>
            <div className={classes.lastDivFooter}>
                <img className={classes.footerIcon} src={Discad}  alt="currencyIcon"/>
                <img className={classes.footerIcon} src={Facebook}  alt="currencyIcon"/>
                <img className={classes.footerIcon} src={Twitter}  alt="currencyIcon"/>
                <img className={classes.footerIcon} src={Instagram}  alt="currencyIcon"/>
                <img className={classes.footerIcon} src={Github}  alt="currencyIcon"/>
                <img className={classes.footerIcon} src={Youtube}  alt="currencyIcon"/>
            </div>
        </div>
    )
}

export default Footer;