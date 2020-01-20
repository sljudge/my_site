import { StyleSheet } from 'aphrodite';


export default StyleSheet.create({

    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        height: '100vh',
        minHeight: '100vh',
        width: '100vw',
        minWidth: '100vw',
        margin: '0',
        // backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(ellipse at center, #000000 65%,#1E1E1E 95%)',
        '@media screen and (max-width: 700px)': {
            flexDirection: "column"
        }
    }
})

