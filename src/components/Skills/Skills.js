import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import styles from './styles'

const viewportWidth = window.innerWidth

const Skills = () => {
    return (
        <div className={css(styles.skills)}>
            <div>
                <h1 className={css(styles.title)}>Skills</h1>
                <p className={css(styles.text)}>Fluent in front-end technologies including HTML, CSS/Sass, JavaScript and React.<br /> Well versed in OOP programming languages having worked with PHP, Ruby, Python and JavaScript.<br /> Fan of component based design and comfortable with state management tools such as Redux / Redux Saga.<br /> Experience designing databases and working with MySql.<br /> Foundational knowledge of computer science including algorithms, Big-O notation and data structures.<br />Excellent communicator with a wealth of professional experience across different industries, countries and cultures. Comfortable breaking down complex subjects in a clear, concise and comprehensible way.<br />Able to keep deadlines prioritising working code and taking on responsibility in an Agile framework.<br /><br />Always looking to learn something new.
                </p>
            </div>
            <div className={css(styles.iconsContainer)}>
                <h2 className={css(styles.iconsHeader)}>Code{viewportWidth > 900 && <br />} Samples</h2>
                <div className={css(styles.icons)}>
                    <a href='https://github.com/sljudge/summer2019/tree/master/responsive_web_design' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-html5"></i>
                    </a>
                    <a href='https://github.com/sljudge/portfolio/tree/master/src' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-sass"></i>
                    </a>
                    <a href='https://github.com/sljudge/sample_code/' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-node-js"></i>
                    </a>
                    <a href='https://github.com/sljudge/Pink_crocodile/tree/master/resources/js/components' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-react"></i>
                    </a>
                    <a href='https://github.com/sljudge' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a href='https://github.com/sljudge/sample_code' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-gulp"></i>
                    </a>
                    <a href='https://github.com/sljudge/php_cms' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-php"></i>
                    </a>
                    <a href='https://github.com/sljudge/Pink_crocodile' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-laravel"></i>
                    </a>
                    <a href='https://github.com/sljudge/sample_code/' target='_blank' className={css(styles.icon)}>
                        <i className="fab fa-python"></i>
                    </a>
                    <a href='https://github.com/sljudge/data_structures' target='_blank' className={css(styles.icon)}>
                        <i className="fas fa-sitemap"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Skills