import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical } from "../../styles/resposnsiveSize";
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:moderateScale(16),
        paddingVertical:moderateScaleVertical(24)
    }
})
export default styles