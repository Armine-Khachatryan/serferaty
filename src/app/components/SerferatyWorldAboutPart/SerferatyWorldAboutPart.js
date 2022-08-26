import React from "react";
import SerferatyWorldImg1 from '../../assets/images/SerferatyWorldImg1.png';
import SerferatyWorldImg2 from '../../assets/images/SerferatyWorldImg2.png'
import SerferatyWorldImg3 from '../../assets/images/SerferatyWorldImg3.png'
import SerferatyWorldImg4 from '../../assets/images/SerferatyWorldImg4.png'
import SerferatyWorldImg5 from '../../assets/images/SerferatyWorldImg5.png'
import classes from './SerferatyWorldAboutPart.module.css';



function SerferatyWorldAboutPart () {

    return(
        <div className={classes.serferatyWhole}>
            <div className={classes.titleSerferaty}>Serferaty World</div>
           <div className={classes.serfImages}>
               <div className={classes.serImagesFirstPart}>
                    <img className={classes.gridImg} src={SerferatyWorldImg1}/>
               </div>
               <div className={classes.serImagesSecondPart}>
                   <div> <img className={classes.gridImg} src={SerferatyWorldImg2}/></div>
                   <div> <img className={classes.gridImg} src={SerferatyWorldImg3}/></div>
                   <div><img className={classes.gridImg}  src={SerferatyWorldImg4}/></div>
                   <div><img className={classes.gridImg}  src={SerferatyWorldImg5}/></div>
               </div>
           </div>
        </div>
    )

}


export default SerferatyWorldAboutPart;