import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles'
import { css } from 'aphrodite'

const Nav = props => {
    return (
        <div className={css(styles.nav)}>
            <NavLink className={css(styles.icon)} exact activeClassName={css(styles.activeHome)} to="/">
                <i className="fas fa-home"></i>
            </NavLink>
            <NavLink className={css(styles.icon)} activeClassName={css(styles.activeSkills)} to="/skills">
                <i className="fas fa-file-code"></i>
            </NavLink>
            <NavLink className={css(styles.icon)} activeClassName={css(styles.activeProjects)} to="/projects">
                <i className="fas fa-folder"></i>
            </NavLink>
            <NavLink className={css(styles.icon)} activeClassName={css(styles.activeAbout)} to="/about">
                <i className="fas fa-info-circle"></i>
            </NavLink>
            <NavLink className={css(styles.icon)} to="#">
                <i className="fab fa-github"></i>
            </NavLink>
            <NavLink className={css(styles.icon, styles.lastIcon)} to="#">
                <i className="fab fa-linkedin"></i>
            </NavLink>
        </div >
    )
}

export default Nav