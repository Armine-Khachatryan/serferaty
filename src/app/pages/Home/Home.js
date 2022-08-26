import React from "react";
import RentAGame from "../../components/RentAGame/RentAGame";
import GrabServer from "../../components/GrabServer/GrabServer";
import SlickSliderForGames from "../../components/SlickSliderForGames/SlickSliderForGames";
import classes from './Home.module.css';
import HomeUpPart from "../../components/HomeUpPart/HomeUpPart";
import Footer from "../../components/Footer/Footer";





function Home (props) {



    return(
        <div>
            <HomeUpPart/>
            <SlickSliderForGames/>
            <RentAGame/>
            <GrabServer/>
            <Footer/>
        </div>
    )
}

export default Home;