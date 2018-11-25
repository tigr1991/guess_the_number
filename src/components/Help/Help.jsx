import React, {Component} from 'react'

export default class Help extends Component {

    render() {
        const {secretNumber} = this.props
        return (
            <div>
                <p>{secretNumber}</p>
            </div>
        )
    }
}