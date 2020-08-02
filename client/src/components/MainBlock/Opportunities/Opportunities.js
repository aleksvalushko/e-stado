import React from 'react';
import mod from './Opportunities.module.sass';
import icon from '../../../images/icon.svg';

function Opportunities() {
    return (
        <div className={mod.opportunities}>
            <div className={mod.opportunity}>
                <img src={icon} alt="icon"/>
                <div>
                    <span>Своевременного определения половой охоты </span>
                    особенно если она не заметна по внешним признакам
                </div>
            </div>
            <div className={mod.opportunity}>
                <img src={icon} alt="icon"/>
                <div>
                    <span>Анализом состояния здоровья коровы </span>
                    при наблюдении за жвачкой, активностью и температурой тела
                </div>
            </div>
            <div className={mod.opportunity}>
                <img src={icon} alt="icon"/>
                <div>
                    <span>Выявление хромоты </span>
                    предупреждением и выявлением развития хромоты
                </div>
            </div>
        </div>
    );
}

export default Opportunities;
