import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
    about: {
        display: "flex",
        alignItems: "center",
        width: '100%',
        height: '100%',
        padding: '2rem',
    },
    aboutElem: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        padding: '1rem'
    },
    title: {
        margin: '0',
        textAlign: 'right',
        width: '100%'
    },
    text: {
        margin: '0',
    },
    profile: {
        height: '19rem',
        border: '0.3rem double #1E1E1E'
    }
})