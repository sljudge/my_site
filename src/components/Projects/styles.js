import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
    projects: {
        display: 'flex',
        flexDirection: "column",
        height: '100%',
        paddingLeft: '2rem',
        paddingRight: '2rem',
    },
    titleContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'flex-end'
    },
    title: {
        marginBottom: '0.25rem',
        marginLeft: 'auto'
    },
    projectsContainer: {
        position: 'relative',
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
        alignItems: "center",
        width: '100%',
        height: '100%',
        marginBottom: '2rem'
    },
    ///////////////////////////////////////////////////////////////////////////////////////
    logoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '12rem',
        height: '12rem',
        margin: '1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '50%'
    },
    logo: {
        minWidth: '9rem',
        maxWidth: '9rem',
        minHeight: '9rem',
        maxHeight: '9rem',
    },
    logoHover: {
        ':hover': {
            backgroundColor: 'whitesmoke',
        }
    },
    ///////////////////////////////////////////////////////////////////////////
    display: {
        position: "absolute",
        left: '0',
        top: '0',
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    minimiseBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "flex-end",
        width: '6rem',
        fontSize: '2.5rem',
        marginLeft: '2rem',
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: 'rgba(220, 4, 28, 0.5)',
        borderRadius: '1rem 1rem 0 0',

    },
    arrow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '2rem',
        height: '100%',
        width: '2rem',
        color: '#1E1E1E',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    arrowLeft: {
        borderRadius: '1rem 0 0 1rem'
    },
    arrowRight: {
        borderRadius: '0 1rem 1rem 0'
    },
    arrowHover: {
        ':hover': {
            color: 'whitesmoke',
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    }

})