import { StyleSheet } from "react-native";
import colorsPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/resposnsiveSize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScaleVertical(24),
    },
    headerText: {
        fontSize: textScale(16),
        color: colorsPath.black,
        fontWeight: 'bold',
        // marginLeft: moderateScale(10)
    },
    headerStyle: {
        justifyContent: "flex-start"
    },
    flatView: {
        backgroundColor: colorsPath.white,
        padding: moderateScale(20),
        borderRadius: moderateScale(8),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        marginBottom:moderateScaleVertical(10)
    },
    flatContentView: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    flatContentTimeContainer: {
        flexDirection: "row",
        alignItems: 'center',
        paddingRight: 10
    },
    dateAndTimeStyle: {
        backgroundColor: "#d2ffc7",
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    completedTaskView: {
        flexDirection: "row",
        backgroundColor: colorsPath.white,
        justifyContent: "space-between",
        borderRadius: 14,
        marginTop: moderateScale(26),
        padding: moderateScale(14)
    },
    tickContainer: {
        flexDirection: "row",
        marginTop: moderateScaleVertical(10),
        alignItems: "center"
    },
    tickStyle: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    greenText: {
        marginLeft: 8,
        color: "green",
        fontWeight: "bold",
    },
    spinnerImage: {
        height: moderateScale(120),
        width: moderateScale(120)
    },
    toggleBarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScaleVertical(20)
    },
    toggleText: {
        backgroundColor: colorsPath.lighPurple,
        paddingVertical: moderateScaleVertical(8),
        paddingHorizontal: moderateScale(20),
        color: colorsPath.black

    },
    remindersView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:moderateScaleVertical(20),
    }
})
export default styles