import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
    about: {
        display: "flex",
        flexDirection: "column",
        minHeight: '100%',
        maxHeight: '100%',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        overflowY: 'scroll',
    },
    infoContainer: {
        height: '100%',
        display: "flex",
        alignItems: "center",
        '@media screen and (max-width: 900px)': {
            flexDirection: 'column',
            justifyContent: "center",
        }
    },
    aboutElem: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        padding: '1rem',
        '@media screen and (max-width: 900px)': {
            width: '100%'
        }
    },
    title: {
        textAlign: 'right',
        width: '100%',
        borderRight: '0.25rem solid #1E1E1E',
        padding: '1rem',
        marginBottom: '0.25rem',
    },
    text: {
        margin: '0',
        lineHeight: '2.25rem',
        height: '100%'
    },
    profile: {
        height: '19rem',
        border: '0.3rem double #1E1E1E',
        '@media screen and (max-width: 600px)': {
            height: '16rem'
        },
        '@media screen and (max-width: 475px) and (max-height: 700px)': {
            height: '10rem'
        }
    }
})