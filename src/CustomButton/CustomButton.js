import React from 'react'
import classes from "./CustomButton.module.css"

const CustomButton = ({Onclick,title,defaultIcon, hoverIcon}) => {

    return (
        <div className={classes.CustomButton}>
            {/* <button onClick={Onclick.onCanceled ? Onclick.onCanceled : Onclick.onClicked}>  */}
            <button> 
                <img className={defaultIcon? classes.defaultIcon:"d-none"} src={defaultIcon} alt="cartIcon"/>
                <img className={hoverIcon? classes.hoverIcon: "d-none"} src={hoverIcon} alt="cartIcon"/>
                {title}
            </button>      
        </div>
    )
}

export default CustomButton
