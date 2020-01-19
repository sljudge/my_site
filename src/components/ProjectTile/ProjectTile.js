import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

const ProjectTile = props => {
    const { imgSrc, title, href, description, madeWith } = { ...props.data }

    return (
        <>
            <div className={css(styles.projectContainer)}>
                <div className={css(styles.imgContainer)}>
                    <img className={css(styles.img)} src={`./img/screenshots/${imgSrc}`} />
                </div>
                <div className={css(styles.textContainer)}>
                    <h2 className={css(styles.title)}>{title}</h2>
                    <a href={href} target='_blank'>{href.replace(/^(https?:\/\/)?(www\.)?/i, '')}</a>
                    <p className={css(styles.text)}>{description}</p>
                    <div className={css(styles.madeWith)}>
                        <i className={`fas fa-cog ${css(styles.cog)}`}></i>
                        <div>
                            {`Made with ${madeWith}`}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectTile