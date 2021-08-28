import React from 'react'
import classes from './CardOne.module.css'

import cardImage from "../../assets/Images/CardItemImg.png"
import regularTakaSign from "../../assets/Icons/TakaRegular.png"
import offerTakaSign from "../../assets/Icons/TakaOffer.png"
import CustomButton from '../../CustomButton/CustomButton'
import cartIcon from "../../assets/Icons/cartIconOrange.svg"


const CardOne = () => {
    return (
        <div className={classes.cardOne+" d-flex flex-column justify-content-center p-3 "}>

            <div className={classes.cardOneImg+ ' pointer mb-4'}>
                <img  src={cardImage} alt='CardImage'/>
            </div>

            <p className={classes.cardTitle+' py-1 pointer '}>
                Yamaha XSR 155 Sport Heritage...
            </p> 

            <del className={classes.regularPrice+ ' pointer '} >     
                 ৳  5,75000
            </del>

            <div className={classes.offerPrice+ ' pointer '}>
                <p>
                    ৳  5,05000
                </p> 
            </div>
            
            <div className={classes.buyorCart+ ' d-flex pt-1 align-items-center justify-content-between mt-1'}>
                
                <div className={classes.buyNow+' d-flex align-items-center justify-content-center'}>
                    <CustomButton title="Buy Now"/>
                </div>

                <button>
                    <img src={cartIcon} alt='CartIcon'/>
                </button>
               
            </div>
      
        </div>
    )
}


export default CardOne
