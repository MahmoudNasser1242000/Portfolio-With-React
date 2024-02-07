import React from 'react'
import styles from "./card.module.css";

export default function Card({img, getImage}) {
    return (
        <div className='col-md-4 col-sm-6' onClick={()=> {getImage(img)}}>
            <div className='position-relative'>
                <img src={img} className='w-100 rounded-1' alt="card image"/>
                <div className={`bg-success d-flex justify-content-center align-items-center ${styles.card_plus}`}>
                    <span className={`${styles.plus} mb-4`}>&#43;</span>
                </div>
            </div>
        </div>
    )
}
