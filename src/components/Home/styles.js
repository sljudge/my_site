import { StyleSheet } from 'aphrodite'


export default StyleSheet.create({
    home: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        textAlign: "right",
        height: '25rem',
        width: '100%',
        paddingRight: '8rem',
        color: '#1E1E1E',
        backgroundImage: 'url(./img/paper.jpg)',
        backgroundPosition: 'center',
        border: '5px inset rbga(0,0,0,0.1)',
        boxShadow: 'inset 7px 7px 70px -7px rgba(30,30,30,0.9)',
        fontSize: '1.25rem'
    },
})