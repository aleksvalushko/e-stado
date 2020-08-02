import React from 'react';
import mod from './Logo.module.sass';
import logo from '../../../images/logo.svg';

function Logo() {
    return (
        <div className={mod.logo}>
            <div><img src={logo} alt="logo"/></div>
            <div className={mod.logoText}>Система комплексного мониторинга состояния молочных коров</div>
        </div>

    );
}

export default Logo;
