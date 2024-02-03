import React from 'react'
import NavigationBar from '../navbar/NavigationBar';
import styles from "./layout.module.css";
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className={styles.layout}>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
