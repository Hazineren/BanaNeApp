import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const baseStyle=StyleSheet.create({
    container:{
        padding:10,
        margin:7,
        alignItems:'center',
        borderRadius:10,
    },
    title:{
        fontSize:17,
        fontWeight:'bold'
    }
});

export default {
    primary: StyleSheet.create({
        ...baseStyle,
        container:{
            ...baseStyle.container,
            backgroundColor:colors.darkGreen,
        },
        title:{
            ...baseStyle.title,
            color:'white',
        }
    }),
    secondary: StyleSheet.create({
        ...baseStyle,
        container:{
            ...baseStyle.container,
            backgroundColor:'white',
            borderWidth:1,
        },
        title:{
            ...baseStyle.title,
            color:colors.darkGreen,
        }
    })
}