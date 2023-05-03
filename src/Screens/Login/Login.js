import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import { TextInputComp } from "../../Components/TextInputComp";
import colorsPath from "../../constants/colorsPath";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
import { moderateScaleVertical, } from "../../styles/resposnsiveSize";
import styles from "./Login.style";
import actions from "../../redux/actions";
import store from "../../redux/store";
const Login = ({ navigation, routes }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const onLogin = ()=>{
        if(!email || !password){
            alert('please enter all the fields')
            return
        }else{
            store.dispatch(actions.login(true))
        }
    }
    console.log(email)
    return (
        <View style={styles.container}>

            <HeaderComp
                text={"Todoist"}
            />
            <Text style={styles.textStyle}>Login</Text>

            <View style={styles.inputContainer}>
                <TextInputComp
                    placeholder={"E-mail Address"}
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                />

                <TextInputComp
                    placeholder={"Password"}
                    inputStyle={styles.inputStyle}
                   image={imagePath.ic_eye_hide}
                    secondImage={imagePath.ic_eye_view}
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                   
                />
            </View>

            <View style={styles.forgetpw}>
                <TouchableOpacity  >
                    <Text style={{color: colorsPath.black}} >Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComp
                onPress={onLogin}
                    title={"Log In"}
                />
            </View>



            <View style={styles.donthaveAccount}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{color: colorsPath.black}}>
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