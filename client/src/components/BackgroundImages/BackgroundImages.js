import React from 'react';
import mod from './BackgroundImages.module.sass';

function BackgroundImages() {
    return (
        <div>
            <div className={mod.bgLeft}></div>
            <div className={mod.bgRight}></div>
            <div className={mod.bgClouds}></div>
            <div className={mod.bgClouds2}></div>
            <div className={mod.bgClouds4}></div>
            <div className={mod.bgCenterCloud}></div>
        </div>

    );
}

export default BackgroundImages;
