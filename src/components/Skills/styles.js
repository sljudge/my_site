import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
    skills: {
        display: 'flex',
        flexDirection: "column",
        height: '100%',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textAlign: 'right',
        overflowY: 'scroll',

    },
    title: {
        borderRight: '0.25rem solid #1E1E1E',
        padding: '1rem',
        marginBottom: '0.25rem'
    },
    text: {
        textAlign: 'left',
        lineHeight: '2.25rem',
        padding: '2rem'
    },
    iconsContainer: {
        display: 'flex',
        flexGrow: '1',
        justifyContent: 'flex-start',
        alignContent: "stretch",
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
    },
    iconsHeader: {
        transform: 'rotate(-90deg)',
        textAlign: 'center',
        marginTop: 'auto',
        marginRight: '0',
        marginBlockEnd: '0',
        marginBlockStart: '0',
        paddingBottom: '1rem',
        borderBottom: '0.25rem solid #1E1E1E',
        fontWeight: '450',
    },
    icons: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: '1',
        height: '100%',
        justifyContent: "space-evenly",
        alignItems: 'center',
        alignContent: "space-around"
    },
    icon: {
        padding: '0.8rem',
        margin: '0.25rem',
        fontSize: '3rem',
        backgroundColor: '#232323',
        color: 'whitesmoke',
        borderRadius: '20%',
        boxShadow: '0.3rem 0.3rem rgba(0,0,0,0.5)',
        ':hover': {
            backgroundColor: 'whitesmoke',
            color: '#232323',
            boxShadow: '0.6rem 0.6rem rgba(0,0,0,0.8)'
        },
        '@media screen and (max-width: 900px)': {
            fontSize: '2.5rem',
        },
        '@media screen and (min-height: 700px)': {
            margin: '0.5rem',
        }
    },
})