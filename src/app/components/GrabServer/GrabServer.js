import React from "react"
import GrabGamePic from '../../assets/images/GrabGamePic.png';
import classes from './GrabServer.module.css';
import HomeButton from "../../UI/HomeButton/HomeButton";



function GrabServer() {



    return(
            <div className={classes.backImgDiv}  style={{ background: `url(${GrabGamePic})` , height: "600px" }}>
                <div className={classes.grabTitle}>Grab your very own gamer server now.</div>
                <HomeButton>Order Game NOW!</HomeButton>
            </div>
    )
}

export default GrabServer;