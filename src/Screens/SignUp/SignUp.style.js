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
    forgotpw: {
        marginTop: moderateScaleVertical(5),
        alignSelf: "flex-end"
    },
    ortxt: {
        marginTop: moderateScaleVertical(20),
        alignItems: "center"
    },
    SignUpWith: {
        marginTop: moderateScaleVertical(20),
        alignItems: "center"
    },

    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: moderateScaleVertical(8)
    },
    AlreadyHave: {
        justifyContent: 'flex-end',
        flex: 1,
        marginVertical: moderateScaleVertical(10),
        alignItems: "center"
    },

    iconStyle: {
        borderWidth: 1,
        borderRadius: 100,
        padding: 22,
        borderColor: colorsPath.darkGrey,
    }
})
export default styles