import React from 'react'
import styles from "./home.module.css";
import ComponentTitle from '../component-title/ComponentTitle';

export default function Home() {
    return (
        <div className={`d-flex justify-content-center align-items-center h-75 ${styles.home}`}>
            <div className='text-center'>
                <img src="./assets/images/avataaars.svg" className={`${styles.profile}`} alt="profile image" />
                <ComponentTitle title={"START FRAMEWORK"} color={"text-white"} bg_star={""} bg_line={"bg-white"}/>
            </div>
        </div>
    )
}
