import React from 'react'
import styles from "./about.module.css";
import ComponentTitle from '../component-title/ComponentTitle';

export default function About() {
    return (
        <div className={`h-75 ${styles.about}`}>
            <div>
                <ComponentTitle title={"ABOUT COMPONENT"} color={"text-white"} bg_star={""} bg_line={"bg-white"} />
                <div className={`row py-4 mx-auto ${styles.about_content}`}>
                    <div className='col-md-6'>
                        <p className='text-white text-center'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className='col-md-6'>
                        <p className='text-white text-center'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
