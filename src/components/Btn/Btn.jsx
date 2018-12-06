import React, {Component} from 'react'
import styles from './Btn.styl'

export default class Btn extends Component {
    render() {
        return (
                <button className={styles.btn} {...this.props}>{this.props.children}</button>
        )
    }
}