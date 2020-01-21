import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

const Main = props => {
    return (
        <div className={css(styles.main)}>
            <div className={css(styles.panel)}>
                {props.children}
            </div>
        </div>
    )
}

export default Main