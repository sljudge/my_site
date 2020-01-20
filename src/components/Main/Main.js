import React from 'react'
import { css } from 'aphrodite'
import { motion } from 'framer-motion'
import styles from './styles'

const Main = props => {
    return (
        <motion.div
            // animate={{ x: '6.5rem' }}
            // transition={{ ease: 'easeIn', duration: 1.5 }}
            className={css(styles.main)}
        >
            <div className={css(styles.panel)}>
                {props.children}
            </div>
        </motion.div>
    )
}

export default Main