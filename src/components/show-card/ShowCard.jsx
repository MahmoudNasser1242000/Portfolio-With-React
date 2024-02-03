import React from 'react'
import styles from "./show-card.module.css";

export default function ShowCard({ image, closeShowImage }) {
    return (
        <div className={`${styles.show_card} ${image !== null ? "d-flex" : "d-none"}`} onClick={(event) => { closeShowImage(event) }}>
            <img src={image !== null ? image : ""} alt="card image" className='rounded-1' onClick={(event) => { event.stopPropagation() }} />
        </div>
    )
}
