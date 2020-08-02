import React from 'react';
import mod from './ScrollBarBlock.module.sass';

function ScrollBarBlock(props) {

    let circle1 = `${mod.circle1} ${mod.active1}`;
    let circle2 = props.counter >= 1 ? `${mod.circle2} ${mod.active1}` : mod.circle2;
    let line1 = props.counter >= 1 ? `${mod.line1} ${mod.active2}` : mod.line1;
    let circle3 = props.counter >= 2 ? `${mod.circle3} ${mod.active1}` : mod.circle3;
    let line2 = props.counter >= 2 ? `${mod.line2} ${mod.active2}` : mod.line2;

    return (
        <div className={mod.scrollBarBlock}>
            <div className={circle1}></div>
            <div className={line1}></div>
            <div className={circle2}></div>
            <div className={line2}></div>
            <div className={circle3}></div>
        </div>
    );
}

export default ScrollBarBlock;
