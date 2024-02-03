import React from 'react'
import styles from "./contact.module.css";
import ComponentTitle from '../component-title/ComponentTitle';
import { Button, Form } from 'react-bootstrap';

export default function Contact() {
    return (
        <div>
            <div className='py-4'>
                <ComponentTitle title={"CONATCT SECTION"} color={"text-dark"} bg_star={"bg-white"} bg_line={"bg-dark"} />
            </div>
            <div className={`py-4 mx-auto ${styles.form_control}`}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" className={styles.input_field} placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" className={styles.input_field} placeholder="Enter Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" className={styles.input_field} placeholder="Enter Your Age" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" className={styles.input_field} placeholder="Enter Your Password" />
                    </Form.Group>
                    <Button variant="success" className='rounded-1 px-3'>Send Message</Button>{' '}
                </Form>
            </div>
        </div>
    )
}
