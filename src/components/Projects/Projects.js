import React, { useState } from 'react'
import { css } from 'aphrodite'
import styles from './styles'
import { ProjectTile } from '../ProjectTile'

const projectList = {
    pinkCroc: {
        imgSrc: 'pink_croc.png',
        title: 'Live Auction Application',
        href: 'http://pink-crocodile.data4you.cs',
        description: 'Auction application created for the Pink Crocodile charity for children with the intention of raising funds from live auctions at social functions.',
        madeWith: 'React, Laravel and MySQL'
    }
}


const Projects = (props) => {
    const [display, setDisplay] = useState(false)
    const [displayItem, setDisplayItem] = useState(null)

    const handleDisplay = (e) => {
        console.log('set display')
        setDisplayItem(e.target.id)
        setDisplay(true)
    }

    return (
        <div className={css(styles.projects)}>
            <div className={css(styles.titleContainer)}>
                {display && <div className={css(styles.minimiseBtn, styles.logoHover)} onClick={() => setDisplay(false)}><i className="fas fa-times"></i></div>}
                <h1 className={css(styles.title)}>Projects</h1>
            </div>
            <div className={css(styles.projectsContainer)}>
                {display &&
                    <>
                        <div className={css(styles.display)}>
                            <div className={css(styles.arrow, styles.arrowLeft, styles.arrowHover)}>&lt;</div>
                            <ProjectTile data={projectList.pinkCroc} />
                            <div className={css(styles.arrow, styles.arrowRight, styles.arrowHover)}>&gt;</div>
                        </div>
                    </>
                }

                <div id='pink_croc' className={css(styles.logoContainer, styles.logoHover)} onClick={handleDisplay}>
                    <img className={css(styles.logo)} src="./img/logos/pink_croc_logo.svg" />
                </div>
            </div>
        </div>
    )
}

export default Projects