import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
    skills: {
        display: 'flex',
        flexDirection: "column",
        height: '100%',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textAlign: 'right'
    },
    text: {
        textAlign: 'left'
    },
    iconsContainer: {
        display: 'flex',
        flexGrow: '1',
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: '100%',
    },
    icon: {
        padding: '0.8rem',
        fontSize: '3rem',
        backgroundColor: '#232323',
        color: 'whitesmoke',
        borderRadius: '20%',
        boxShadow: '0.3rem 0.3rem rgba(0,0,0,0.5)'
    },
    iconHover: {
        ':hover': {
            backgroundColor: 'whitesmoke',
            color: '#232323',
            boxShadow: '0.6rem 0.6rem rgba(0,0,0,0.8)'
        }
    }

})