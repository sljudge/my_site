import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    projectContainer: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        justifyContent: "center",
        width: ' 100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: '1rem',
        '@media screen and (max-width: 900px)': {
            justifyContent: "center",
        },
        '@media screen and (max-width: 700px)': {
            justifyContent: "center",
        }
    },
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        width: 'auto'
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0.2rem double rgba(0,0,0,0.3)',
        '@media screen and (max-width: 900px)': {
            minWidth: '100%',
            maxWidth: '100%',
        },
        overflow: 'scroll'

    },
    title: {
        margin: '0.5rem'
    },
    text: {
        padding: '1rem',
        fontWeight: '400',
        margin: '0'
    },
    madeWith: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        width: '100%'
    },
    cog: {
        fontSize: '2rem',
        margin: '1rem'
    },
    img: {
        maxHeight: '90%',
        width: 'auto',
        maxWidth: '100%'
    }

})