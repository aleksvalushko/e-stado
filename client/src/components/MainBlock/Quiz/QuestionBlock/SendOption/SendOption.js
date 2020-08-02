import React, {useState} from 'react';
import mod from './SendOption.module.sass';
import mod2 from '../QuestionBlock.module.sass';
import InputMask from 'react-input-mask';

function SendOption(props) {

    let questionBlock = props.questionsBlock;

    let [radioValue, setRadioValue] = useState(questionBlock.answerOption);
    let [phoneValue, setPhoneValue] = useState(questionBlock.answerOption);

    function handleRadioChange(e) {
        setRadioValue(questionBlock.answerOption = e.target.value);
    }

    function handlePhoneChange(e) {
        setPhoneValue(questionBlock.phoneNumber = e.target.value);
    }

    function handleEmailChange(e) {
        setPhoneValue(questionBlock.email = e.target.value);
    }

    function handleViberChange(e) {
        setPhoneValue(questionBlock.viber = e.target.value);
    }

    function handleTelegramChange(e) {
        setPhoneValue(questionBlock.telegram = e.target.value);
    }

    function handleWhatsappChange(e) {
        setPhoneValue(questionBlock.whatsapp = e.target.value);
    }

    return (
        <div className={mod2.questionsBlock}>
            <div className={mod2.question}><span>{questionBlock.questionPart}</span></div>
            <div className={mod.line}>
                <div className={mod.radioBlock}>
                    <input type='radio' value='option1'
                           checked={questionBlock.answerOption === 'option1'}
                           onChange={handleRadioChange}/>{questionBlock.sendOptions[0]}
                </div>
                <div className={mod.radioBlock}>
                    <input type='radio' value='option2'
                           checked={questionBlock.answerOption === 'option2'}
                           onChange={handleRadioChange}/>{questionBlock.sendOptions[1]}
                </div>
                <div className={mod.radioBlock}>
                    <input type='radio' value='option3'
                           checked={questionBlock.answerOption === 'option3'}
                           onChange={handleRadioChange}/>{questionBlock.sendOptions[2]}
                </div>
                <div className={mod.radioBlock}>
                    <input type='radio' value='option4'
                           checked={questionBlock.answerOption === 'option4'}
                           onChange={handleRadioChange}/>{questionBlock.sendOptions[3]}
                </div>
                <div className={mod.radioBlock}>
                    <input type='radio' value='option5'
                           checked={questionBlock.answerOption === 'option5'}
                           onChange={handleRadioChange}/>{questionBlock.sendOptions[4]}
                </div>
            </div>
            <div className={mod.answerInput}>
                {
                    questionBlock.answerOption === 'option1' ?
                        <InputMask mask="+ 375\(99)\ 999 99 99" maskChar="_" placeholder='введите ваш номер телефона'
                                   onChange={handlePhoneChange} value={phoneValue}/>
                        : questionBlock.answerOption === 'option2'
                        ? <input type="email" placeholder='example@yandex.ru'
                                 onChange={handleEmailChange} value={questionBlock.email}/>
                        : questionBlock.answerOption === 'option3'
                            ? <input type="text" placeholder='ваш viber'
                                     onChange={handleViberChange} value={questionBlock.viber}/>
                            : questionBlock.answerOption === 'option4'
                    ? <input type="text" placeholder='ваш telegram'
                             onChange={handleTelegramChange} value={questionBlock.telegram}/>
                    : questionBlock.answerOption === 'option5'
                    ? <input type="text" placeholder='ваш whatsapp'
                             onChange={handleWhatsappChange} value={questionBlock.whatsapp}/>
                    : ''
                }
            </div>
        </div>
    );
}

export default SendOption;
