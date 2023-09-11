import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle />
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return (
        <>
            This is app component
        </>
    )
}

function Rating() {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star() {
    return (
        <div>
            star
        </div>
    )
}

function Accordion() {
    return (
        <>
            <AccordionTitle />
            <AccordionBody />
        </>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <h3>Меню</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}


export default App;
