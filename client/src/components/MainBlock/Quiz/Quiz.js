import React, {Component} from 'react';
import mod from './Quiz.module.sass';
import arrow from '../../../images/arrow.svg';
import ScrollBarBlock from "./ScrollBarBlock/ScrollBarBlock";
import QuestionBlock from "./QuestionBlock/QuestionBlock";
import SendOption from "./QuestionBlock/SendOption/SendOption";
import WithAnswersBlock from "./QuestionBlock/WithAnswersBlock/WithAnswersBlock";
import axios from 'axios';
import ThanksLetter from "./ThanksLetter";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            questionsBlock: [
                {
                    questionId: 1,
                    questionPart1: 'Сколько у вас ',
                    questionPart2: 'дойных коров?',
                    placeholder: 'Например: 45',
                    answer: ''
                },
                {
                    questionId: 2,
                    questionPart1: 'Сколько ',
                    questionPart2: 'молока в сутки вы доите?',
                    placeholder: 'Например: 10',
                    answer: ''
                },
                {
                    questionId: 3,
                    questionPart: 'Вы являетесь?',
                    answers: ['Руководитель фермы', 'Зоотехник', 'Ветеренар'],
                    answer: ''
                },
                {
                    questionPart: 'Куда прислать вам ответ?',
                    sendOptions: ['По телефону', 'E-mail', 'Viber', 'Telegram ', 'Whatsaap'],
                    answerOption: '',
                    phoneNumber: '',
                    email: '',
                    viber: '',
                    telegram: '',
                    whatsapp: ''
                }
            ],
            button: ['Далее', 'Отправить и получить ответ'],
            thanksLetter: {
                part1: 'Благодарим Вас ',
                part2: 'за прохождение нашего опроса!'
            }
        }
    }

    render() {

        let questionCounter = () => {
            this.setState(state => {
                return state.counter > 3 ? {counter: 0} : {counter: state.counter++}
            });
        };

        let results = (e) => {
            e.preventDefault();

            axios.post("http://localhost:3001/sendMessage", {
                cowsCount: this.state.questionsBlock[0].answer,
                milkCount: this.state.questionsBlock[1].answer,
                position: this.state.questionsBlock[2].answer,
                phoneNumber: this.state.questionsBlock[3].phoneNumber,
                email: this.state.questionsBlock[3].email,
                viber: this.state.questionsBlock[3].viber,
                telegram: this.state.questionsBlock[3].telegram,
                whatsapp: this.state.questionsBlock[3].whatsapp
            });
            this.setState(state => {
                return state.counter = 4;
            });
        };

        return (
            <div className={mod.quiz}>
                {
                    this.state.counter !== 4
                    ? <div className={mod.quizBlock}>
                            <ScrollBarBlock counter={this.state.counter}/>
                            {
                                this.state.counter === 0
                                    ? <QuestionBlock questionsBlock={this.state.questionsBlock[0]}/>
                                    : this.state.counter === 1
                                    ? <QuestionBlock questionsBlock={this.state.questionsBlock[1]}/>
                                    : this.state.counter === 2
                                        ? <WithAnswersBlock questionsBlock={this.state.questionsBlock[2]}/>
                                        : this.state.counter === 3
                                            ? <SendOption questionsBlock={this.state.questionsBlock[3]}/>
                                            : ''
                            }
                        </div>
                        : <ThanksLetter thanksLetter={this.state.thanksLetter}/>
                }
                {
                    (this.state.counter >= 0 && this.state.counter < 3)
                        ? <button className={mod.quizButton} onClick={questionCounter}>
                            {this.state.button[0]}<img src={arrow} alt="arrow"/>
                        </button>
                        : this.state.counter === 3
                        ? <button className={mod.quizButton2} onClick={results}>{this.state.button[1]}</button>
                        : ''
                }
            </div>
        );
    }
}

export default Quiz;
