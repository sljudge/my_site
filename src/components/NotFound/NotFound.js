import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

const NotFound = () => {
    return (
        <div className={css(styles.NotFound)}>
            <h3>Sorry, this page doesn't exist.</h3>
            <i className={`fas fa-search ${css(styles.icon)}`}></i>
            <h1>/404</h1>
        </div>
    )
}

export default NotFound