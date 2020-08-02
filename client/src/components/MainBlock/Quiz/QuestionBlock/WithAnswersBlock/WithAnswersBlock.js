import React, {useState} from 'react';
import mod from './WithAnswersBlock.module.sass';
import mod2 from '../QuestionBlock.module.sass';

function WithAnswersBlock(props) {

    let questionBlock = props.questionsBlock;

    let [value, setState] = useState(questionBlock.answer);

    function handleItemChange(e) {
        setState(questionBlock.answer = e.target.value);
    }

    return (
        <div className={mod2.questionsBlock}>
            <div className={mod2.questionNumber}>ВОПРОС {questionBlock.questionId}</div>
            <div className={mod2.question}><span>{questionBlock.questionPart}</span></div>
            <div className={mod.radioBlock}>
                <div className={mod.radio}>
                    <input type='radio' value={questionBlock.answers[0]}
                           checked={questionBlock.answer === questionBlock.answers[0]}
                           onChange={handleItemChange}/>
                    {questionBlock.answers[0]}</div>
                <div className={mod.radio}>
                    <input type='radio' value={questionBlock.answers[1]}
                           checked={questionBlock.answer === questionBlock.answers[1]}
                           onChange={handleItemChange}/>
                    {questionBlock.answers[1]}</div>
                <div className={mod.radio}>
                    <input type='radio' value={questionBlock.answers[2]}
                           checked={questionBlock.answer === questionBlock.answers[2]}
                           onChange={handleItemChange}/>
                    {questionBlock.answers[2]}
                </div>
            </div>
        </div>
    );
}

export default WithAnswersBlock;
