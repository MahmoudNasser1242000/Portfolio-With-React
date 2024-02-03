import React from 'react'
import styles from "./title.module.css";

export default function ComponentTitle({title, color, bg_star, bg_line}) {
    return (
        <div>
            <h2 className={`${styles.compnent_title} ${color}`}>
                <span>{title}</span>
                <span className={`${styles.line} ${bg_line}`}></span>
                <span className={`d-inline-block ${styles.star} ${bg_star}`}>&#x2726;</span>
            </h2>
        </div>
    )
}
