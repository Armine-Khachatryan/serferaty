import React from "react";
import classes from './HomeButton.module.css';





function HomeButton (props) {


    return(
        <button className={classes.homeButton}
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={props.OnClick}>
            {props.children}
        </button>
    )
}


export default HomeButton;