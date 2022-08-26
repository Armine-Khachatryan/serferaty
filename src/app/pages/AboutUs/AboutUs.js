import React from "react";
import classes from './AboutUs.module.css';
import AboutUsCoverImg from "../../assets/images/AboutUsCoverImg.png";
import AboutUsComponent from "../../components/AboutUsComponent/AboutUsComponent";
import Header from "../../components/Header/Header";
import SerferatyWorldAboutPart from "../../components/SerferatyWorldAboutPart/SerferatyWorldAboutPart";
import Footer from "../../components/Footer/Footer";



function AboutUs () {


    return (
        <>
            <Header/>
                <div className={classes.coverAbout} style={{backgroundImage: `url(${AboutUsCoverImg})`, height: "600px"}}>
                    <div className={classes.coverAboutText}>Your World ! Your Rules</div>
                </div>
            <div className="container">
                <AboutUsComponent/>
                <SerferatyWorldAboutPart/>
            </div>
            <Footer/>
        </>

    )
}

export default AboutUs;