import React from 'react';
import mod from './MainBlock.module.sass';
import Logo from "./Logo/Logo";
import Title from "./Title/Title";
import Opportunities from "./Opportunities/Opportunities";
import Quiz from "./Quiz/Quiz";

function MainBlock() {
    return (
        <div className={mod.mainBlock}>
            <div className={mod.headlines}>
                <Logo />
                <Title />
                <Opportunities />
            </div>
            <Quiz/>
        </div>
    );
}

export default MainBlock;
