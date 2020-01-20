import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    projectContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: ' 100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: '1rem',
        '@media screen and (max-width: 900px)': {
            justifyContent: "center"
        }
    },
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        minWidth: '40%',
        maxWidth: '40%'
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "center",
        minWidth: '60%',
        maxWidth: '60%',
        height: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        border: '0.2rem double rgba(0,0,0,0.3)',
        '@media screen and (max-width: 900px)': {
            minWidth: '90%',
            maxWidth: '90%',
        }

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
        marginRight: '1rem'
    },
    img: {
        height: '90%',
    }

})