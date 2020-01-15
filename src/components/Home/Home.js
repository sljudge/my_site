import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

const Home = props => {
    return (
        <div className={css(styles.home)}>
            <div>
                <h1>Sam Judge</h1>
                <h3>Web development and programming solutions.</h3>
            </div>
        </div>
    )
}

export default Home