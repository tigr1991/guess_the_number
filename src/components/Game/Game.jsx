import React, {Component} from 'react'
import Monitor from "components/Monitor";
import Input from "components/Input";
import Btn from "components/Btn";
import Help from "../Help/Help";
import Certificate from "../Certificate/Certificate";
import GameOver from "../Fail/GameOver";

export default class Game extends Component {

    countAttempts = 7
    initText = "Отгадай число за " + this.countAttempts + " попыток"


    state = {
        text: this.initText,
        leftAttempts: this.countAttempts,
        countAttempts: 0,
        secretNumber: Math.round(Math.random() * 100 + 1),
        inputValue: '',
        win: 0
    }

    handleCheckClick = () =>  {
        const countAttempts = ++this.state.countAttempts
        const leftAttempts = this.countAttempts - this.state.countAttempts
        let win = 0
        if (this.state.inputValue == this.state.secretNumber) {
            win = 1
        } else {
            if (this.state.inputValue < this.state.secretNumber) {
                this.state.text = "Больше"
            } else {
                this.state.text = "Меньше"
            }
            if (leftAttempts === 0) {
                win = -1
            }
        }
        this.setState({
            countAttempts: countAttempts,
            leftAttempts: leftAttempts,
            win: win,
            inputValue: '',
        })
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        if (this.state.win === 1) {
            return (
                <div>
                    <Certificate> </Certificate>
                </div>
            )
        }
        if (this.state.win === -1) {
            return (
                <div>
                    <GameOver> </GameOver>
                </div>
            )
        }
        return (
            <div className="window">
                <Monitor text={this.state.text} leftAttempts={this.state.leftAttempts}> </Monitor>
                <Input onChange={this.handleChange} value={this.state.inputValue}/>
                <Btn onClick={this.handleCheckClick}>Проверить</Btn>
                {/*<Help secretNumber={this.state.secretNumber}> </Help>*/}

            </div>
        )
    }
}