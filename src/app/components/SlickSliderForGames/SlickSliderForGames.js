import React, {Component} from "react";
import GamePic1 from '../../assets/images/GamePic1.png';
import GamePic2 from '../../assets/images/GamePic2.png';
import GamePic3 from '../../assets/images/GamePic3.png';
import RightArrow from '../../assets/images/RightArrow.png';
import Slider from "react-slick";
import classes from './SlickSliderForGames.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const imgData = [
    {
        img: GamePic1,
        title:"Arma Reforger",
        price: "2,65 $",
        days:"3 days"
    },
    {
        img: GamePic2,
        title:"Arma Reforger",
        price: "2,65 $",
        days:"3 days"
    },
    {
        img: GamePic3,
        title:"Arma Reforger",
        price: "2,65 $",
        days:"3 days"
    },
    {
        img: GamePic1,
        title: "Risk of Rain",
        price: "2,65 $",
        days:"3 days"
    },
    {
        img: GamePic2,
        title:"Arma Reforger",
        price: "2,65 $",
        days:"3 days"
    },
    {
        img: GamePic3,
        title: "Risk of Rain",
        price: "2,65 $",
        days:"3 days"
    },
    {
        img: GamePic1,
        title: "Risk of Rain",
        price: "2,65 $",
        days:"3 days"
    },
    {
        img: GamePic2,
        title: "Risk of Rain",
        price: "2,65 $",
        days:"3 days"
    },
];



    export default class SlickSliderForGames extends Component {

        state = {showUnderlined: "featuredGames"};

        render() {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows:false,
                // space:5,
                adaptiveHeight:true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            };


            const setUnderlined= (data) => {
                this.setState({
                    showUnderlined: data
                })
            };

            console.log(this.state.showUnderlined, "dkjfkldjfkldjf")


            const itemImg = imgData.map((item, index) =>
                <div className={classes.gameDiv}>
                    <div className={classes.gamePicParent}>
                        <img className={classes.gamePic} src={item.img}/>
                    </div>
                    <div className={classes.gameTitle}>{item.title}</div>
                    <div className={classes.price}>from
                        <span className={classes.priceBoldSpan}>{item.price}</span>
                        / {item.days}</div>
                </div>)



            return (
                <>
                    <div className={classes.sliderHeader}>
                        <div className={`${classes.sliderHeaderPart} ${this.state.showUnderlined === 'featuredGames' && classes.activeUnderlined }`}
                             onClick={() => {setUnderlined('featuredGames')}} >Featured Games</div>
                        <div className={`${classes.sliderHeaderPart} ${this.state.showUnderlined === 'topGames' && classes.activeUnderlined }`}
                             onClick={() => {setUnderlined('topGames')}}>Top Games</div>
                        <div className={`${classes.sliderHeaderPart} ${this.state.showUnderlined === 'latestGames' && classes.activeUnderlined }`}
                             onClick={() => {setUnderlined('latestGames')}}>Latest Games</div>
                    </div>
                    <div className={classes.gameSlider}>
                        <div className={classes.titleDiv}> All Games <img className={classes.rightArrow} src={RightArrow} /></div>
                        <Slider {...settings}>
                            {itemImg}
                        </Slider>
                    </div>
                </>

            );
        }
    }

