import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import { TextInputComp } from "../../Components/TextInputComp";
import colorsPath from "../../constants/colorsPath";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
import { moderateScaleVertical, } from "../../styles/resposnsiveSize";
import styles from "./Login.style";
const Login = ({ navigation, routes }) => {
    return (
        <View style={styles.container}>

            <HeaderComp
                text={"Todoist"}
            />
            <Text style={styles.textStyle}>Login</Text>

            <View style={styles.inputContainer}>
                <TextInputComp
                    placeholder={"E-mail Address"}
                    
                />

                <TextInputComp
                    placeholder={"Password"}
                    inputStyle={styles.inputStyle}
                   image={imagePath.ic_eye_hide}
                    secondImage={imagePath.ic_eye_view}
                   
                />
            </View>

            <View style={styles.forgetpw}>
                <TouchableOpacity  >
                    <Text >Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComp
                onPress={()=>{
                    navigation.navigate(navigationStrings.HOME)
                }}
                    title={"Log In"}
                />
            </View>



            <View style={styles.donthaveAccount}>
                <View style={{ flexDirection: "row" }}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(navigationStrings.SIGNUP)
                        }
                    >
                        <Text style={{ color: colorsPath.purple, fontWeight: "bold" }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
export default Login