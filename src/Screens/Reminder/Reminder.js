import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import colorsPath from "../../constants/colorsPath";
import imagePath from "../../constants/imagePath";
import { moderateScale, moderateScaleVertical } from "../../styles/resposnsiveSize";
import { styles } from "./Reminder.style";
import Modal from "react-native-modal";



const Reminder = () => {
    const [isModelVisible,setModal]=useState(false)

    const onAdd=()=>{
        setModal(!isModelVisible)
    }

    return (
        <View style={styles.container}>
            <HeaderComp
                image={imagePath.icBackward}
                text={"New Reminder"}
                textStyle={styles.headerText}
                headerStyle={styles.headerStyle}
            />
            <View style={styles.inputContainer}>
                <TextInput style={{ color: colorsPath.black, padding: 24 }}
                    placeholder="Title"
                />
                <View style={styles.underline} />
                <TextInput style={styles.txtContainer}
                    multiline={true}
                    placeholder="Notes"
                />
            </View>
            <View style={styles.details}>
                <Text style={{ color: colorsPath.txtColor }}>Details</Text>
                <Image style={styles.imgStyle}
                    source={imagePath.icBackward} />
            </View>

            <View style={styles.calenStyle}>

                <TouchableOpacity style={styles.timeButton} >

                    <Image
                        style={styles.timeButtonImage}
                        source={imagePath.icCalender} />
                    <Text>
                        Due Date
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.timeButton}>
                    <Image
                        style={styles.timeButtonImage}
                        source={imagePath.icAlarm} />
                    <Text>Time</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lastView}>
                <ButtonComp
                    onPress={onAdd}
                    title='Add' />
            </View>
            <Modal isVisible={isModelVisible} >
            
                <View style={{
                    flex:1,
                    justifyContent:"center",
                    alignSelf:"center",
                    }}>
                <TouchableOpacity onPress={onAdd}
                
                style={{
                    height:160,
                    width:160,
                    backgroundColor:colorsPath.purple,
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:8,
                 
                }}
                >
                    <Image source={imagePath.icTick}/>
                    <Text style={{
                        textAlign:"center",
                        color:colorsPath.white,
                        fontWeight:"bold",
                        marginTop:moderateScaleVertical(8)}}>
                        Your reminder has been added
                    </Text>

                </TouchableOpacity>
                </View>

                
            </Modal>
        </View>
    )
}

export default Reminder