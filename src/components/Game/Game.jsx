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
    initText = "Отгадай число от " + this.minNumber + " до " + this.maxNumber + " за " + this.countAttempts + " попыток"

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
        const countAttempts = ++this.state.countAttempts
        const leftAttempts = this.countAttempts - this.state.countAttempts
        let currentRoundStatus = 0
        if (this.state.inputValue == this.state.secretNumber) {
            currentRoundStatus = 1
        } else {
            if (this.state.inputValue < this.state.secretNumber) {
                this.state.text = "Больше ↑"
            } else {
                this.state.text = "Меньше ↓"
            }
            if (leftAttempts === 0) {
                currentRoundStatus = -1
            }
        }
        this.setState({
            countAttempts,
            leftAttempts,
            currentRoundStatus,
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
        if (this.state.currentRoundStatus === 1) {
            return (
                <div>
                    <Certificate> </Certificate>
                </div>
            )
        }
        if (this.state.currentRoundStatus === -1) {
            return (
                <div className={(styles.window)}>
                    <GameOver > </GameOver>
                </div>
            )
        }
        return (
            <div className={(styles.window)}>
                <Monitor text={this.state.text} leftAttempts={this.state.leftAttempts}> </Monitor>
                <Input onChange={this.handleChange} onKeyPress={this.handleKeyPress.bind(this)} value={this.state.inputValue}/>
                <Btn onClick={this.handleCheckClick}>Enter</Btn>
                <Help secretNumber={this.state.secretNumber}> </Help>
            </div>
        )
    }
}