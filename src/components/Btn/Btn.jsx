import React, {Component} from 'react'

export default class Btn extends Component {
    render() {
        return (
                <button {...this.props}>{this.props.children}</button>
        )
    }
}