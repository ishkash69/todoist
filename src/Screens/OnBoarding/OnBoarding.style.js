import { StyleSheet } from "react-native";
import colorsPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/resposnsiveSize";
const styles=StyleSheet.create({
    container:{
        flex:1,
        // paddingHorizontal:moderateScale(16),
        paddingVertical:moderateScaleVertical(24),
    },
    AlreadyHave: {
        justifyContent: 'flex-end',
        marginBottom: moderateScaleVertical(1),
        alignItems: "center",

    },
    buttonContainer: {
        marginTop: moderateScaleVertical(20),
        marginHorizontal:moderateScale(20),
        marginBottom:moderateScaleVertical(20)
    },
    
  textStyle: {
    color: colorsPath.purple,
    fontSize: textScale(28),
    fontWeight: "bold",
    marginTop: moderateScaleVertical(32),
    marginLeft:moderateScale(20)
},
dotStyle:{
    marginLeft:30,
}
})
export default styles