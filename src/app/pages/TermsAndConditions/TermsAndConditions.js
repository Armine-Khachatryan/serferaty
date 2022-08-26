import React from "react";
import TermsAndConditionsComponent from "../../components/TermsAndConditionsComponent/TermsAndConditionsComponent";
import Header from "../../components/Header/Header";
import classes from './TermsAndConditions.module.css';
import Footer from "../../components/Footer/Footer";





function TermsAndConditions () {


    return (
        <>
            <Header/>
            <div className="container">
               <TermsAndConditionsComponent/>
            </div>
            <Footer/>
        </>

    )
}

export default TermsAndConditions;