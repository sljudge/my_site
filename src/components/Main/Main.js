import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

const Main = props => {
    return (
        <div className={css(styles.main)}>
            {props.children}
        </div>
    )
}

export default Main