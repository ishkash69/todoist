import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import { TextInputComp } from "../../Components/TextInputComp";
import colorsPath from "../../constants/colorsPath";
import imagePath from "../../constants/imagePath";
import { moderateScaleVertical,} from "../../styles/resposnsiveSize";
import styles from "./Login.style";
const Login = () =>{
    return(
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
                />
            </View>

            <View style={styles.forgetpw}>
                <TouchableOpacity  >
                    <Text >Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComp
                    title={"Log In"}
                />
            </View>

            

            <View style={styles.donthaveAccount}>
                <View style={{ flexDirection: "row" }}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: colorsPath.purple, fontWeight: "bold" }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}
export default Login