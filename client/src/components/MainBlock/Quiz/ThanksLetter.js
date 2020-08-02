import React from 'react';
import mod from './ThanksLetter.module.sass';

function ThanksLetter(props) {

    let thanksLetter = props.thanksLetter;

    return (
        <div className={mod.thanksLetter}>
            <div className={mod.part1}>{thanksLetter.part1}</div>
            <div>{thanksLetter.part2}</div>
        </div>
    );
}

export default ThanksLetter;
