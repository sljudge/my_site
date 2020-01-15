import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    nav: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: '100vh',
        width: '5rem',
        margin: '0',
        fontSize: '3rem',
        backgroundColor: 'gray',
        backgroundImage: 'url(./img/cover_dark.jpg)',
        zIndex: '1'
    },
    icon: {
        color: 'rgba(255,255,255,0.7)',
        textDecoration: 'none',
        paddingTop: '2rem'
    }
})
