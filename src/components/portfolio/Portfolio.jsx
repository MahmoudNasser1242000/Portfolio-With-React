import {React, useState} from 'react'
// import styles from "./portfolio.module.css";
import { Container } from 'react-bootstrap';
import ComponentTitle from '../component-title/ComponentTitle';
import Card from '../card/Card';
import ShowCard from '../show-card/ShowCard';
import { nanoid } from 'nanoid'

export default function Portfolio() {
    const [card, setcard] = useState(null);
    function getImage(img) {
        setcard(img);
    }
    function closeShowImage(e) {
        e.stopPropagation();
        setcard(null);
    }
    return (
        <div className='w-100'>
            <Container className="mx-auto">
                <div className='text-center py-4'>
                    <ComponentTitle title={"PORTFOLIO COMPONENT"} color={"text-dark"} bg_star={"bg-white"} bg_line={"bg-dark"}/>
                </div>
                <div className='row gy-4 pb-5 pt-4'>
                    <Card img={"./assets/images/port1.png"} getImage={getImage} card_key={nanoid()}/>
                    <Card img={"./assets/images/port2.png"} getImage={getImage} card_key={nanoid()}/>
                    <Card img={"./assets/images/port3.png"} getImage={getImage} card_key={nanoid()}/>
                    <Card img={"./assets/images/port1.png"} getImage={getImage} card_key={nanoid()}/>
                    <Card img={"./assets/images/port2.png"} getImage={getImage} card_key={nanoid()}/>
                    <Card img={"./assets/images/port3.png"} getImage={getImage} card_key={nanoid()}/>
                </div>
            </Container>
            <ShowCard image={card} closeShowImage={closeShowImage}/>
        </div>
    )
}
