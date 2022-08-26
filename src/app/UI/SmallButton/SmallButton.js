import React from "react";
import classes from './SmallButton.module.css';




function SmallButton (props) {


    return(
        <button className={classes.smallButton}
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={props.OnClick}>
            {props.children}
        </button>
    )
}


export default SmallButton;