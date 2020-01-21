import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'
import { motion } from 'framer-motion'


const MobileFooter = () => {
    return (
        <div className={css(styles.mobileFooter)}>
            <motion.div
                animate={{ x: '-100%' }}
                transition={{ ease: 'easeIn', duration: 2 }}
                className={css(styles.footerIconsContainer)}

            >
                <a className={css(styles.icon)} href="https://github.com/sljudge" target='_blank'>
                    <i className="fab fa-github"></i>
                </a>
                <a className={css(styles.icon)} href="https://www.linkedin.com/in/sam-judge/" target='_blank'>
                    <i className="fab fa-linkedin"></i>
                </a>
            </motion.div>

        </div>
    )
}

export default MobileFooter