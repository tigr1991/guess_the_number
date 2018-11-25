import React, {Component} from 'react'
import styles from './Monitor.styl'

export default class Monitor extends Component {

    render() {
        const {text, leftAttempts} = this.props
        return (
            <div className={styles.monitor}>
                <p className={styles.mainText}>{text}</p>
                <p className={styles.leftAttempts}>У вас осталось {leftAttempts} ...</p>
            </div>
        )
    }
}