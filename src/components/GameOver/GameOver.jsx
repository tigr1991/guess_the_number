import React, {Component} from 'react'
import styles from './GameOver.styl'

export default class GameOver extends Component {

    render() {
        return (
            <div>
                <img className={styles.game_over} src="http://risovach.ru/upload/2017/05/mem/golub_144433564_orig_.jpg"/>
            </div>
        )
    }
}