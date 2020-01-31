import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

const ProjectTile = props => {
    const wide = props.wide
    const display = props.tileDisplay
    const { imgSrc, altImgSrc, title, href, description, madeWith } = { ...props.data }

    console.log(props)

    //////////////////////////
    //////    CONTENT   //////
    //////////////////////////
    const image = (
        <>
            <div className={css(styles.imgContainer)}>
                <img className={css(styles.img)} src={wide ? `./img/screenshots/${imgSrc}` : `./img/screenshots/${altImgSrc}`} />
            </div>
        </>
    )
    const about = (
        <>
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
        </>
    )
    //////////////////////////
    //////  SET CONTENT //////
    //////////////////////////
    let content
    if (display === 'image') {
        content = (
            <>
                {image}
            </>
        )
    } else if (display === 'about') {
        content = (
            <>
                {about}
            </>
        )
    }
    //////////////////////////
    //////    RETURN    //////
    //////////////////////////
    return (
        <>
            <div className={css(styles.projectContainer)}>
                {content}
            </div>
        </>
    )
}

export default ProjectTile