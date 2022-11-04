import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import SocialComp from "../../Components/SocialButton";
import { TextInputComp } from "../../Components/TextInputComp";
import colorsPath from "../../constants/colorsPath";
import imagePath from "../../constants/imagePath";
import { moderateScaleVertical, textScale } from "../../styles/resposnsiveSize";
import styles from "./SignUp.style";

const SignUp = () => {
    return (
        <View style={styles.container}>

            <HeaderComp
                text={"Todoist"}
            />
            <Text style={styles.textStyle}>SignUp</Text>

            <View style={styles.inputContainer}>
                <TextInputComp
                    placeholder={"Name"}
                />
                <TextInputComp
                    placeholder={"Phone Number"}
                    inputStyle={styles.inputStyle}
                />
                <TextInputComp
                    placeholder={"E-mail Address"}
                    inputStyle={styles.inputStyle}
                />
                <TextInputComp
                    placeholder={"Password"}
                    inputStyle={styles.inputStyle}
                    image={imagePath.ic_eye_hide}
                />
            </View>

            <TouchableOpacity style={styles.forgotpw}   >
                <Text >Forgot Password</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <ButtonComp
                    title={"Sign Up"}
                />
            </View>

            <View style={styles.ortxt}>
                <Text style={{ fontSize: textScale(18) }}>
                    OR
                </Text>
            </View>
            <View style={styles.SignUpWith} >
                <Text>
                    Signup with
                </Text>
            </View>
            <View style={styles.socialContainer}>
                <SocialComp socialIcon={imagePath.icMail} />
                <SocialComp socialIcon={imagePath.icApple}
                    imageStyle={styles.iconStyle}
                />
                <SocialComp socialIcon={imagePath.icFb} />
            </View>

            <View style={styles.AlreadyHave}>
                <View style={{ flexDirection: "row" }}>
                    <Text>
                        Already have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: colorsPath.purple, fontWeight: "bold" }}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}
export default SignUp