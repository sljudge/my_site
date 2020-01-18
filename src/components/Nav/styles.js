import { StyleSheet } from 'aphrodite';

const activeIconBackrgoundOpacity = '0.8'

export default StyleSheet.create({
    nav: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: '100vh',
        minWidth: '6.5rem',
        maxWidth: '6.5rem',
        margin: '0',
        fontSize: '3rem',
        backgroundColor: 'gray',
        backgroundImage: 'url(./img/cover_dark.jpg)',
        zIndex: '1'
    },
    icon: {
        color: 'rgba(255,255,255,0.7)',
        textDecoration: 'none',
        marginTop: '1.5rem',
        padding: '0.7rem',
        borderRadius: '1rem'
    },
    lastIcon: {
        marginBottom: '2rem'
    },
    activeHome: {
        backgroundColor: `rgba(0, 30, 123, ${activeIconBackrgoundOpacity})`,
        color: '#fd7a04'
    },
    activeSkills: {
        backgroundColor: `rgba(240, 31, 255, ${activeIconBackrgoundOpacity})`,
        color: '#fff81f'
    },
    activeAbout: {
        backgroundColor: `rgba(220, 4, 28, ${activeIconBackrgoundOpacity})`,
        color: '#158a03'
    }
})
