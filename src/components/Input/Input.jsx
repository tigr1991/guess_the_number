import React, {Component} from 'react'
import stylus from './Input.styl'

export default class Input extends Component {

    render() {
        return (
            <input className={stylus.input} {...this.props}/>
        );
    }

}