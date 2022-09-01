import { StyleSheet , Dimensions} from "react-native";
import colors from "../../../styles/colors";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:15,
        width:10,
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:deviceSize.height/3,
        width:'95%'
    },
    input_container:{
        flex:1,
    },
    modal:{
        justifyContent:'flex-end',
        margin:0
    },
    btn:{
        padding:10,
        margin:5,
        backgroundColor:colors.darkGreen,
        
    },
    btnTxt:{
        color:'white',
        fontWeight:'bold',
        fontSize:17,
        textAlign:'center'
    }
})