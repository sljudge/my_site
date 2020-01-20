import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from 'aphrodite'
import styles from './styles'
import { motion } from 'framer-motion'


const MobileFooter = () => {
    return (
        <motion.div
            animate={{ y: '-5.5rem' }}
            transition={{ ease: 'easeIn', duration: 2 }}
            className={css(styles.mobileFooter)}
        >
            <NavLink className={css(styles.icon)} to="#">
                <i className="fab fa-github"></i>
            </NavLink>
            <NavLink className={css(styles.icon)} to="#">
                <i className="fab fa-linkedin"></i>
            </NavLink>
        </motion.div>
    )
}

export default MobileFooter