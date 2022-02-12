import React from 'react';
import './Person.css';

const person = (props) => {
    // return <h1>I'm a Person and {Math.floor(Math.random()*30)}  years old.</h1>
    return (
        <div className='person'>
            <h1 onClick={props.click}>I'm {props.name} and {props.age}  years old.</h1>
            <p>{props.children}</p>
        </div>)

}

export default person;