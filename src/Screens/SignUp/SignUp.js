import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import SocialComp from "../../Components/SocialButton";
import { TextInputComp } from "../../Components/TextInputComp";
import colorsPath from "../../constants/colorsPath";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
import { moderateScaleVertical, textScale } from "../../styles/resposnsiveSize";
import styles from "./SignUp.style";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

const SignUp = ({navigation,route}) => {
    
    const[userInfo , setUserInfo]=useState()
    const[fbUserInfo, setFbUserInfo] = useState()

    console.log(fbUserInfo," fb user info")

    useEffect(()=>{
        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            // iosClientId:"com.googleusercontent.apps.823158673213-otnbk212iol9i88mf67r0f4vg9pf1tp6",      
          });
    },[])

    const logOutWithFb = ()=>{
        LoginManager.logOut();
        setFbUserInfo({fbUserInfo:null})
        console.log(fbUserInfo,"1578215123168456484")
    }
    const getinfoFromToken = token =>{
        const PROFILE_REQUEST_PARAMS ={
            fields:{
                string: "id,name,picture"
            }
        }
        const profileRequest = new GraphRequest(
            "/me",
            {token,parameters:PROFILE_REQUEST_PARAMS},
            (error,user)=>{
            if(error){
                console.log("error raised in login",error)
            }else{
                setFbUserInfo(user);
                console.log("result====__+_+_+_+_+",user)
                // navigation.navigate(navigationStrings.FACEBOOK_SIGNIN,fbUserInfo)
                alert("facebook login successfull")
                
            }
            }            
        )
        new GraphRequestManager().addRequest(profileRequest).start()
    }
    const loginWithFacebook =()=>{
        LoginManager.logInWithPermissions(["public_profile"]).then(
            login=>{
                if(login.isCancelled){
                    console.log("login cancelled")
                }else{
                    AccessToken.getCurrentAccessToken().then(data=>{
                        const accessToken = data.accessToken.toString()
                        getinfoFromToken(accessToken)
                        console.log(accessToken)

                    })
                }
            },
            error =>{
                console.log("login fail with error",error)
            }
        )
    }

    const googleSignIn = async ()=>{
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserInfo(userInfo)
            console.log(userInfo,"userInfooooo>>>>>>")
            alert("sign in successfulll")
            navigation.navigate(navigationStrings.GOOGLE_SIGNIN,{userInfo:userInfo})

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
    }
const isLogin = fbUserInfo
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
                    secondImage={imagePath.ic_eye_view}
                />
            </View>

            <TouchableOpacity style={styles.forgotpw}   >
                <Text >Forgot Password</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <ButtonComp
                onPress={()=>{
                    navigation.navigate(navigationStrings.LOGIN)
                }}
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
                <SocialComp
                 socialIcon={imagePath.icMail}
                 onPress={()=>{
                    googleSignIn()
                 }} />
                <SocialComp socialIcon={imagePath.icApple}
                    imageStyle={styles.iconStyle}
                />
                <SocialComp
                onPress={()=>{
                    loginWithFacebook()
                }}
                socialIcon={imagePath.icFb} />
            </View>
            <ButtonComp 
            onPress={()=>{
                logOutWithFb()
            }}
            buttonStyle={{marginTop:10}} title={"log out from facebook"}/>

            <View style={styles.AlreadyHave}>
                <View style={{ flexDirection: "row" }}>
                    <Text>
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate(navigationStrings.LOGIN)
                    }}
                    >
                        <Text style={{ color: colorsPath.purple, fontWeight: "bold" }}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}
export default SignUp