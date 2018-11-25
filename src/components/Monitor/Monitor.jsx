import React, {Component} from 'react'
import styles from './Monitor.styl'

export default class Monitor extends Component {

    render() {
        const {text, leftAttempts, numberRound} = this.props
        return (
            <div className={styles.monitor}>
                <p className={styles.round}>Раунд №{numberRound}</p>
                <p className={styles.mainText}>{text}</p>
                <p className={styles.leftAttempts}>У вас осталось {leftAttempts} попыток</p>
            </div>
        )
    }
}