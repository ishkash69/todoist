import { StyleSheet } from "react-native"
import colorsPath from "../../constants/colorsPath"
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/resposnsiveSize"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScaleVertical(24),

    },
    textStyle: {
        color: colorsPath.purple,
        fontSize: textScale(28),
        fontWeight: "bold",
        marginTop: moderateScaleVertical(32)
    },
    inputContainer: {
        marginTop: moderateScaleVertical(25)
    },
    inputStyle: {
        marginTop: moderateScaleVertical(16),
    },
    buttonContainer: {
        marginTop: moderateScaleVertical(20)
    },
    forgetpw: {
        marginTop: moderateScaleVertical(5),
        alignSelf: "flex-end"
    },
    donthaveAccount: {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: moderateScaleVertical(1),
        alignItems: "center"
    }



})
export default styles