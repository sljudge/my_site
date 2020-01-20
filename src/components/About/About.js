import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

const About = () => {
    return (
        <>
            <div className={css(styles.about)}>
                <h1 className={css(styles.title)}>About me</h1>
                <div className={css(styles.infoContainer)}>
                    <div className={css(styles.aboutElem)}>
                        <img className={css(styles.profile)} src='./img/profile.jpg' />
                    </div>
                    <div className={css(styles.aboutElem)}>
                        <p className={css(styles.text)}>Self-taught programmer with an insatiable curiosity.<br /><br />
                            Passionate about problem solving, travel, the wild and all things human.<br /><br />
                            Specialist in the frontend spectrum of web-development with full-stack experience and a grounding in computer science.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
