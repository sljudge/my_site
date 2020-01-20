import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
    mobileFooter: {
        position: "relative",
        bottom: '-5.5rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        minWidth: '100vw',
        maxWidth: '100vw',
        minHeight: '5.5rem',
        maxHeight: '5.5rem',
        fontSize: '3rem',
    },
    icon: {
        color: 'rgba(255,255,255,0.7)',
        textDecoration: 'none',
        padding: '0.7rem',
        borderRadius: '1rem'
    },
})