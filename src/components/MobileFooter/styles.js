import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
    mobileFooter: {
        minWidth: '100vw',
        maxWidth: '100vw',
        minHeight: '5.5rem',
        maxHeight: '5.5rem',
    },
    footerIconsContainer: {
        // position: "relative",
        // right: '-100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        width: '100%',
        height: '5.5rem',
        fontSize: '3rem',
    },
    icon: {
        color: 'rgba(255,255,255,0.7)',
        textDecoration: 'none',
        padding: '0.7rem',
        borderRadius: '1rem'
    },
})