import React, {Component} from 'react'
import Monitor from "components/Monitor";
import Input from "components/Input";
import Btn from "components/Btn";
import Help from "../Help/Help";
import Certificate from "../Certificate/Certificate";
import GameOver from "../GameOver/GameOver";
import styles from './Game.styl'

export default class Game extends Component {

    countAttempts = 7
    minNumber = 1
    maxNumber = 100
    initText = "Всего три раунда. Выйграй хотя бы два, отгадав число от " + this.minNumber + " до " + this.maxNumber + " за " + this.countAttempts + " попыток"

    state = {
        text: this.initText,
        leftAttempts: this.countAttempts,
        countAttempts: 0,
        secretNumber: Math.round(Math.random() * this.maxNumber + this.minNumber),
        inputValue: '',
        numberRound: 1,
        countWins: 0,
        currentRoundStatus: 0
    }

    handleCheckClick = () =>  {
        let countAttempts = ++this.state.countAttempts
        let leftAttempts = this.countAttempts - this.state.countAttempts
        let countWins = this.state.countWins
        let numberRound = this.state.numberRound
        if (this.state.inputValue == this.state.secretNumber) {
            countWins++
            this.setState({
                countWins,
            })
            this.startNewRound()
            return;
        } else {
            if (this.state.inputValue < this.state.secretNumber) {
                this.state.text = "Больше ↑"
            } else {
                this.state.text = "Меньше ↓"
            }
            if (leftAttempts === 0) {
                this.startNewRound()
                return;
            }
        }
        this.setState({
            countAttempts,
            leftAttempts,
            countWins,
            numberRound,
            inputValue: '',
        })
    }

    startNewRound()
    {
        let numberRound = this.state.numberRound
        numberRound++
        const countAttempts = 0
        const leftAttempts = this.countAttempts
        const secretNumber = Math.round(Math.random() * this.maxNumber + this.minNumber);
        return this.setState({
            'text': this.initText,
            secretNumber,
            countAttempts,
            leftAttempts,
            numberRound,
            inputValue: '',
        })
    }

    handleKeyPress = (event) =>  {
        if (event.key === 'Enter') {
            this.handleCheckClick()
        }
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        if (this.state.countWins === 2) {
            return (
                <div>
                    <Certificate> </Certificate>
                </div>
            )
        }
        if (this.state.numberRound - this.state.countWins > 2 || this.state.numberRound > 3) {
            return (
                <div className={(styles.window)}>
                    <GameOver > </GameOver>
                </div>
            )
        }
        return (
            <div className={(styles.window)}>
                <Monitor
                    text={this.state.text}
                    leftAttempts={this.state.leftAttempts}
                    numberRound={this.state.numberRound}
                > </Monitor>
                <Input onChange={this.handleChange} onKeyPress={this.handleKeyPress.bind(this)} value={this.state.inputValue}/>
                <Btn onClick={this.handleCheckClick}>Enter</Btn>
                <Help secretNumber={this.state.secretNumber}> </Help>
            </div>
        )
    }
}