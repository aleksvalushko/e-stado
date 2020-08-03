import React, {useState} from 'react';
import mod from './QuestionBlock.module.sass';

function QuestionBlock(props) {

    let questionBlock = props.questionsBlock;

    let [value, setState] = useState(questionBlock.answer);

    function handleInputChange(e) {
        setState(questionBlock.answer = e.target.value);
    }

    return (
        <div className={mod.questionsBlock}>
            <div className={mod.questionNumber}>ВОПРОС {questionBlock.questionId}</div>
            <div className={mod.question}>{questionBlock.questionPart1}<span>{questionBlock.questionPart2}</span></div>
            <input className={mod.answer} type='text' value={questionBlock.answer}
                   placeholder={questionBlock.placeholder} onChange={handleInputChange}/>
        </div>
    );
}

export default QuestionBlock;
