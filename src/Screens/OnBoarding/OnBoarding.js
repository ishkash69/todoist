import React from 'react'
import { View,SafeAreaView ,Text,TouchableOpacity,Image} from 'react-native'
import ButtonComp from '../../Components/ButtonComp'
import { HeaderComp } from '../../Components/HeaderComp'
import colorsPath from '../../constants/colorsPath'
import styles from "./OnBoarding.style"
import Swiper from 'react-native-swiper'
import imagePath from '../../constants/imagePath'
import { moderateScale, moderateScaleVertical } from '../../styles/resposnsiveSize'


const OnBoarding =()=>{
    return(
        <View style={styles.container}>
            <HeaderComp text={"Todoist"}/>
           <View style={{flex:1,marginTop:moderateScaleVertical(80),}}>           
           <Swiper dotStyle={{height:4,width:50}}
           activeDotStyle={{height:4,width:50,}} 
           activeDotColor={colorsPath.purple}
           >
        <View>
         <Image source={imagePath.icFirstOnboard}/>
         <Text style={styles.textStyle}>
            Manage Tasks.
         </Text>
        </View>
        <View >
         <Image source={imagePath.icSecondOnboard}/>
         <Text style={styles.textStyle}>
           Priortize wisely.
         </Text>                
        </View>
        <View >
        <Image source={imagePath.icThird}/>
        <Text style={styles.textStyle}>
            Get reminders on time.
         </Text>
        </View>
      </Swiper>
      </View>
          
            

           <View style={styles.buttonContainer}>
           <ButtonComp title={"Sign Up"}/>
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
export default OnBoarding