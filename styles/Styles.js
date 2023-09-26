import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#abc8e7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        color: '#632727',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        letterSpacing: 0.25
    },
    input: {
        backgroundColor: '#efefefff',
        borderColor: '#ffffff',
        width: 200,
        padding: 10,
        borderRadius: 10,
        elevation: 8,
        borderWidth: 2,
        borderColor: '#9b9191',
        fontSize: 15,
        fontWeight: 'bold',

    },
    button: {
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 15,
        borderRadius: 20,
        elevation: 8,
        backgroundColor: "#c8cecef9" ,
        borderColor: '#a2a2a2',
        fontSize: 25,
        borderWidth: 2,
        marginTop: 20,
        height:80
    },
    result: {
        color: '#272863',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 20,
        paddingBottom: 10,
        paddingTop: 30,
        lineHeight: 21,
        letterSpacing: 0.25,

    },
    dropdown: {
        backgroundColor: "#b3c9e8",
        width: 230,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#eeecec40",
        padding: 10,
        elevation: 8,
    },

});
export { styles };