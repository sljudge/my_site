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
                        <p className={css(styles.text)}>I am currently a freelance web developer but have had many jobs in my short years. I have managed restaurants, taught English, coached football, stacked stooks on the farm, cleaned swimming pools and even done a little bit of office work here and there.<br /> For around 1/5th of my life I have lived outside of the UK, mostly in France and a stint in China (my French is excellent, my Chinese woeful).<br /> I adore reading and sadly buy books faster than I can read them (sad for the lack of time and not of books).<br />I love learning new things and get very frustrated without something to sink my teeth into.<br /> I also love dogs, spicy food, sad songs and cold winter mornings.<br />If you would like to contact me please feel free to add me on LinkedIn.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
