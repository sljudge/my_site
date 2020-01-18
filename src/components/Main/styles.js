import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    main: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: '1',
    },
    panel: {
        height: '30rem',
        width: '100%',
        color: '#1E1E1E',
        backgroundImage: 'url(./img/paper.jpg)',
        backgroundPosition: 'center',
        border: '5px inset rbga(0,0,0,0.1)',
        boxShadow: 'inset 7px 7px 70px -7px rgba(30,30,30,0.9)',
    }
})
