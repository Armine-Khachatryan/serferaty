import React from "react";
import One from "../../assets/images/One.png";
import Two from "../../assets/images/Two.png";
import Three from "../../assets/images/Three.png";
import HomeButton from "../../UI/HomeButton/HomeButton";
import classes from './RentAGame.module.css';



function RentAGame () {


    return(
        <div className={classes.wholeRent}>
            <div className={classes.rentTitle}>Rent a game server in just 60 seconds</div>
            <div className={classes.rentThreeParts}>
                <div className={classes.rentPart}>
                    <img className={classes.rentNumbers} src={One} alt="number"/>
                    <div className={classes.rentText}>Register for free</div>
                </div>
                <div className={classes.rentPart}>
                    <img className={classes.rentNumbers} src={Two} alt="number"/>
                    <div className={classes.rentText}>Top-up money</div>
                </div>
                <div className={classes.rentPart}>
                    <img className={classes.rentNumbers} src={Three} alt="number"/>
                    <div className={classes.rentText}>Order server and play</div>
                </div>
            </div>
            <HomeButton>Start Now</HomeButton>
        </div>
    )
}


export default RentAGame;