import React, {Component} from 'react'

export default class Monitor extends Component {

    render() {
        const {text, leftAttempts} = this.props
        return (
            <div>
                <p>{text}</p>
                <p>У вас осталось {leftAttempts} попыток</p>
            </div>
        )
    }
}