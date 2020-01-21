import React, { useState } from 'react'
import { css } from 'aphrodite'
import styles from './styles'
import { ProjectTile } from '../ProjectTile'

const projectList = {
    pinkCroc: {
        imgSrc: 'pink_croc.png',
        title: 'Live Auction Application',
        href: 'http://pink-crocodile.data4you.cz',
        description: 'Auction application for mobile created for the Pink Crocodile charity with the intention of raising funds from live auctions at social functions.',
        madeWith: 'React, Laravel and MySQL'
    }
}


const Projects = (props) => {
    const [show, setShow] = useState(false)
    const [showItem, setShowItem] = useState(null)
    const [tileDisplay, setTileDisplay] = useState('image')

    const viewportWidth = window.innerWidth
    const wide = viewportWidth > 900 ? true : false

    const handleShow = (e) => {
        setShowItem(e.target.id)
        setShow(true)
    }

    const handleTileDisplay = () => {
        setTileDisplay(tileDisplay === 'image' ? 'about' : 'image')
    }

    return (
        <div className={css(styles.projects)}>
            <div className={css(styles.titleContainer)}>
                {show && <div className={css(styles.minimiseBtn, styles.logoHover)} onClick={() => setShow(false)}><i className="fas fa-times"></i></div>}
                <h1 className={css(styles.title)}>Projects</h1>
            </div>
            <div className={css(styles.projectsContainer)}>
                {show &&
                    <>
                        <div className={css(styles.display)}>
                            {!wide && <div className={css(styles.arrow, styles.arrowLeft)} onClick={handleTileDisplay}>&lt;</div>}
                            <ProjectTile
                                data={projectList.pinkCroc}
                                wide={wide}
                                tileDisplay={tileDisplay}
                            />
                            {!wide && <div className={css(styles.arrow, styles.arrowRight)} onClick={handleTileDisplay}>&gt;</div>}
                        </div>
                    </>
                }

                <div id='pink_croc' className={css(styles.logoContainer)} onClick={handleShow}>
                    <img className={css(styles.logo)} src="./img/logos/pink_croc_logo.svg" />
                </div>
            </div>
        </div>
    )
}

export default Projects