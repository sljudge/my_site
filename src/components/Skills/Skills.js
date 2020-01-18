import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import styles from './styles'

const Skills = () => {
    return (
        <div className={css(styles.skills)}>
            <div>
                <h1>Skills</h1>
                <p className={css(styles.text)}>Fluent in front-end technologies including HTML, CSS/Sass, JavaScript and React.<br /><br />
                    Comfortable navigating back-end technologies and versed in computer science fundamentals.<br /><br />
                    Always keen to learn something new.
                </p>
            </div>
            <div className={css(styles.iconsContainer)}>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-html5"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-sass"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-node-js"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-react"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-github-square"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-gulp"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-php"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-laravel"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fab fa-python"></i>
                </Link>
                <Link to='#' className={css(styles.icon, styles.iconHover)}>
                    <i className="fas fa-sitemap"></i>
                </Link>
            </div>
        </div>
    )
}

export default Skills