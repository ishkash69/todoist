import { StyleSheet } from "react-native";
import colorsPath from "../../constants/colorsPath";
import { moderateScale } from "../../styles/resposnsiveSize";

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:moderateScale(10),
      backgroundColor:colorsPath.backGroundColor
    }
  })
  export default styles