import { StyleSheet } from "react-native";
import colorsPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/resposnsiveSize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScaleVertical(24),

    },
    headerText: {
        fontSize: textScale(16),
        color: colorsPath.black,
        fontWeight: 'bold',
        marginLeft: moderateScale(10)
    },
    headerStyle: {
        justifyContent: "flex-start"
    },
    inputContainer: {
        backgroundColor: colorsPath.white,
        height: moderateScaleVertical(260),
        borderRadius: moderateScale(24),
        marginTop: moderateScaleVertical(24),
    },
    underline: {
        height: 1,
        backgroundColor: colorsPath.darkGrey,
        marginHorizontal: moderateScale(22),
    },
    txtContainer: {
        color: colorsPath.black,
        padding: moderateScale(24),
        marginTop: moderateScaleVertical(16)
    },
    details: {
        backgroundColor: colorsPath.white,
        height: moderateScaleVertical(48),
        borderRadius: moderateScale(8),
        marginTop: moderateScaleVertical(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14,
        alignItems: "center"
    },
    imgStyle:
    {
        tintColor: colorsPath.txtColor,
        transform: [{ rotate: '180deg' }]
    },
    calenStyle:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScaleVertical(24)
    },
    timeButton: {
        backgroundColor: colorsPath.white,
        width: moderateScale(140),
        justifyContent: "center",
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        alignItems:"center",
        padding:10   
    },
    timeButtonImage:{
        marginRight:4
    },
   
    lastView:
    {
        flex: 1,
        justifyContent: 'flex-end'
    }
})