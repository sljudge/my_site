import React, { useState } from 'react'
import { css } from 'aphrodite'
import styles from './styles'
import { ProjectTile } from '../ProjectTile'

const projectList = {
    pink_croc: {
        imgSrc: 'pink_croc.png',
        altImgSrc: 'pink_croc.png',
        title: 'Live Auction Application',
        href: 'http://pink-crocodile.data4you.cz',
        description: 'Mobile first auction application for live charity auctions. Admin area built with Laravel enabling uploading of auctionable items, creation of events and automatic notification to winners. React front-end uses a RESTful Oauth token based approach to consume the api data. Designed in full with the cooperation and input of the charity.',
        madeWith: 'React, Laravel and MySQL'
    },
    currency_converter: {
        imgSrc: 'currency.jpeg',
        altImgSrc: 'currency.jpeg',
        title: 'Native Currency Converter',
        href: 'https://github.com/sljudge/currency_converter',
        description: 'React Native currency converter with customisable themes. Made with the guidance of handlebarlabs.com',
        madeWith: 'React Native, Redux, Redux Saga'
    },
    chess_openings: {
        imgSrc: 'chess.png',
        altImgSrc: 'chess_narrow.png',
        title: 'Chess Explorer',
        href: 'https://github.com/sljudge/chess_openings',
        description: 'Application designed to help with chess openings and exploration. Built from scratch implementing full rules, automated play against the computer and move-by-move data from the Lichess api. Redux Saga used to manage api calls, synchronicity and state history. Component styling implemented with Aphrodite and CSS in JS.',
        madeWith: 'React, Redux, Redux Saga'

    }
}


const Projects = (props) => {
    const [show, setShow] = useState(false)
    const [showItem, setShowItem] = useState(null)
    const [tileDisplay, setTileDisplay] = useState('image')

    const viewportWidth = window.innerWidth
    const wide = viewportWidth > 900 ? true : false
    // const wide = false

    const handleShow = (e) => {
        setShowItem(e.target.id)
        setShow(true)
    }

    const handleTileDisplay = () => {
        setTileDisplay(tileDisplay === 'image' ? 'about' : 'image')
    }

    console.log(show, 'show')

    return (
        <div className={css(styles.projects, show && styles.projectsShow)}>
            <div className={css(styles.titleContainer)}>
                {show && <div className={css(styles.minimiseBtn, styles.logoHover)} onClick={() => { setShow(false); setTileDisplay('image') }}><i className="fas fa-times"></i></div>}
                <h1 className={css(styles.title)} style={show ? { display: 'none' } : {}}>Projects</h1>
            </div>
            <div className={css(styles.projectsContainer)}>
                {show &&
                    <>
                        <div className={css(styles.display)}>
                            {<div className={css(styles.arrow, styles.arrowLeft)} onClick={handleTileDisplay}><i className="fas fa-chevron-left"></i></div>}
                            <ProjectTile
                                data={projectList[showItem]}
                                wide={wide}
                                tileDisplay={tileDisplay}
                            />
                            {<div className={css(styles.arrow, styles.arrowRight)} onClick={handleTileDisplay}><i className="fas fa-chevron-right"></i></div>}
                        </div>
                    </>
                }

                <div className={css(styles.logoContainer)} >
                    <img id='chess_openings' className={css(styles.logoSmall)} src="./img/logos/chess-knight-solid.svg" onClick={handleShow} />
                </div>
                <div className={css(styles.logoContainer)} >
                    <img id='pink_croc' className={css(styles.logo)} src="./img/logos/pink_croc_logo.svg" onClick={handleShow} />
                </div>
                <div className={css(styles.logoContainer)} >
                    <img id='currency_converter' className={css(styles.logoSmall)} src="./img/logos/currency.png" onClick={handleShow} />
                </div>
            </div>
        </div>
    )
}

export default Projects