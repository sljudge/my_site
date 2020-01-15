import React from 'react'
import styles from './styles'
import { css } from 'aphrodite'

const Nav = props => {
    return (
        <div className={css(styles.nav)}>
            <a className={css(styles.icon)} href="#home"><i className="fas fa-home"></i></a>
            <a className={css(styles.icon)} href="#portfolio"><i className="portfolio fas fa-folder"></i></a>
            <a className={css(styles.icon)} href="#portfolio"><i className="portfolio fab fa-github"></i></a>
            <a className={css(styles.icon)} href="#portfolio"><i className="portfolio fab fa-linkedin"></i></a>
            <a className={css(styles.icon)} style={{ paddingBottom: '2rem' }} href="#about"><i className="about fas fa-info-circle"></i></a>
        </div>
    )
}

export default Nav