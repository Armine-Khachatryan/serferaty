import React from "react";
import classes from './PurpleEmptyButton.module.css'




function PurpleEmptyButton (props) {


    return(
        <button className={classes.purpleEmptyButton}
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={props.OnClick}>
            {props.children}
        </button>
    )
}


export default PurpleEmptyButton;