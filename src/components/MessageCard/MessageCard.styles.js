import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.darkGreen,
        marginHorizontal:15,
        borderRadius:7,
        padding:10,
        marginVertical:10,
    },
    inner_container:{
        flexDirection:'row',
    },
    user:{
        flex:1,
        fontWeight:'bold',
        color:'white',
        fontSize:17
    },
    date:{
        color:'white',
        fontStyle:'italic'
    },
    txt:{
        marginTop:14,
        color:'white'
    },
    btnBanane:{
        alignSelf:'flex-end',
        padding:5,
        paddingHorizontal:10,
        borderRadius:15,
        backgroundColor:'white',
    },
    btnTxt:{
        fontWeight:'bold',
        color:'#00251a'
    },
    dislike_count_container:{
        marginHorizontal:3
    }
})