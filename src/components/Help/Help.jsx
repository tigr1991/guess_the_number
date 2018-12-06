import React, {Component} from 'react'
import styles from './Help.styl'

export default class Help extends Component {

    render() {
        const {secretNumber} = this.props
        return (
            <div className={styles.help} title={secretNumber}>

            </div>
        )
    }
}