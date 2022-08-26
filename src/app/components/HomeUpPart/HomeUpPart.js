import React from "react";
import HomeCoverImg from '../../assets/images/HomeCoverImg.png';
import classes from './HomeUpPart.module.css';
import Header from "../Header/Header";
import SlickSliderHomeUpPart from "../SlickSliderHomeUpPart/SlickSliderHomeUpPart";




function HomeUpPart () {

    return(
        <div  className={classes.coverHomeImg} style={{ background: `url(${HomeCoverImg})` , height: "600px" }}>
            <Header/>
            <div className={classes.sliderDiv}>
                <SlickSliderHomeUpPart/>
            </div>
        </div>
    )
}


export default HomeUpPart;