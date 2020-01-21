import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    main: {
        // position: "relative",
        // left: '-6.5rem',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: '1',
        maxWidth: 'calc(100% - 6.5rem)',
        '@media screen and (max-width: 700px)': {
            maxWidth: '100%',
            minWidth: '100%',
        }
    },
    panel: {
        height: '35rem',
        width: '100%',
        color: '#1E1E1E',
        backgroundImage: 'url(./img/paper.jpg)',
        backgroundPosition: 'center',
        border: '5px inset rbga(0,0,0,0.1)',
        boxShadow: 'inset 7px 7px 70px -7px rgba(30,30,30,0.9)',
        '@media screen and (max-width: 900px)': {
            height: '100%'

        }
    }
})
