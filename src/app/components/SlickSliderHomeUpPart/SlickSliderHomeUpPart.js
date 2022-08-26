import React, {Component} from "react";
import Slider from "react-slick";
import HomeImg1 from '../../assets/images/HomeImg1.png';
import HomeImg2 from '../../assets/images/HomeImg2.png';
import HomeImg3 from '../../assets/images/HomeImg3.png';
import HomeImg4 from '../../assets/images/HomeImg4.png';
import classes from './SlickSliderHomeUpPart.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const images = [
    {
        img: HomeImg1,
    },
    {
        img: HomeImg2,
    },
    {
        img: HomeImg3,
    },
    {
        img: HomeImg4,
    },
    {
        img: HomeImg1,
    },
    {
        img: HomeImg2,
    },
    {
        img: HomeImg3,
    },
    {
        img: HomeImg4,
    }
    ];


export default class SlickSliderHomeUpPart extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 2,
            arrows:false,
            // space:5,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        };


        const imageForSlider = images.map((item, index) =>
                          <div className={classes.imageDivForSlider}>
                    <img className={classes.sliderImg} src={item.img}/>
                </div>)


        return (
            <div className={classes.mainDivSlider}>
                <Slider {...settings}>
                    {imageForSlider}
                </Slider>
            </div>
        );
    }
}



