import React from 'react';
import styles from './styles'
import { css } from 'aphrodite';

const Container = props => {
    console.log(styles)
    return (
        <div className={css(styles.container)}>
            {props.children}
        </div>
    )
}

export default Container