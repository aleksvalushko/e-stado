import React from 'react';
import mod from './Title.module.sass';

function Title() {
    return (
        <div className={mod.title}>
            <div className={mod.titleHeadline1}>Ответьте на 3 вопроса и узнайте</div>
            <div className={mod.titleHeadline2}>
                Как <span> увеличить удой каждой коровы до 15% </span> путем
            </div>
        </div>
    );
}

export default Title;
