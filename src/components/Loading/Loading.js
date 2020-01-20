import React, { useState, useEffect } from 'react'
import { css } from 'aphrodite'
import styles from './styles'

let rotateInterval

const Loading = () => {
    const [opacity, setOpacity] = useState(0)
    const [rotate, setRotate] = useState(0)
    const [direction, setDirection] = useState('increasing')
    const [icon, setIcon] = useState(
        <div className={css(styles.loadingContainer)} style={{ backgroundColor: `rgba(255,255,255, ${opacity})`, transform: `rotate(${rotate}deg)` }} >
            <img className={css(styles.loading)} src="./img/gavel.svg" />
        </div>
    )

    const animate = () => {
        setOpacity(prevState => {
            if (prevState >= 1) {
                setDirection('decreasing')
            } else if (prevState <= 0) {
                setDirection('increasing')
            }
            if (direction === 'increasing') {
                return prevState + 0.01
            } else {
                return prevState - 0.01
            }
        })
        setRotate(prevState => (prevState + 3))
        setIcon(
            <div className={css(styles.loadingContainer)} style={{ backgroundColor: `rgba(255,255,255, ${opacity})`, transform: `rotate(${rotate}deg)` }} >
                <img className={css(styles.loading)} src="./img/gavel.svg" />
            </div>
        )
    }

    useEffect(() => {
        rotateInterval = setInterval(() => {
            animate()
        }, 10)
        return () => {
            clearInterval(rotateInterval)
        }
    }, [icon])



    return (
        <>
            {icon}
        </>
    )
}

export default Loading
