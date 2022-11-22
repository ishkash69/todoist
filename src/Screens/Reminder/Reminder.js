import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import colorsPath from "../../constants/colorsPath";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
import { todo } from "../../redux/actions/actions";
import store from "../../redux/store";
import { moderateScale, moderateScaleVertical } from "../../styles/resposnsiveSize";
import { styles } from "./Reminder.style";



const Reminder = ({ navigation, route }) => {
    const data = useSelector(myData => myData.todoData)

    console.log("todo data", data)

    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')

    const [isModalVisible, setModal] = useState(false)
    const onAdd = () => {
        if (title == "" && notes == "") {
            alert("Please fill all the Fields")
            return
        }
        else if (title == "") {
            alert('Please enter Title')
            return
        }
        else if (notes == "") {
            alert('pleae enter Notes')
            return
        }
        else {
            setModal(!isModalVisible)
        }


    }
    const onModalClick = () => {
        store.dispatch(todo({ title, notes }))
        setModal(!isModalVisible)
        // navigation.navigate(navigationStrings.HOME)
    }




    return (
        <View style={styles.container}>
            <HeaderComp
                image={imagePath.icBackward}
                text={"New Reminder"}
                textStyle={styles.headerText}
                headerStyle={styles.headerStyle}
                onPress={() => {
                    navigation.navigate(navigationStrings.HOME)
                }}
            />
            <View style={styles.inputContainer}>
                <TextInput style={{ color: colorsPath.black, padding: 24 }}
                    placeholder="Title"
                    value={title}
                    onChangeText={(title) => {
                        setTitle({ title })
                        console.log('this is title===>>><><>', title)
                    }}


                />
                <View style={styles.underline} />
                <TextInput style={styles.txtContainer}
                    multiline={true}
                    placeholder="Notes"
                    value={notes}
                    onChangeText={(notes) => {
                        setNotes({ notes })
                        console.log('this is notes===>>><><>', notes)
                    }}

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
            <Modal isVisible={isModalVisible} >

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignSelf: "center",

                }}>
                    <TouchableOpacity onPress={onModalClick}

                        style={{
                            padding: moderateScale(30),
                            backgroundColor: colorsPath.purple,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 8,

                        }}
                    >
                        <Image source={imagePath.icTick} />
                        <Text style={{
                            textAlign: "center",
                            color: colorsPath.white,
                            fontWeight: "bold",
                            marginTop: moderateScaleVertical(8)
                        }}>
                            Your reminder has {"\n"}  been added
                        </Text>

                    </TouchableOpacity>
                </View>


            </Modal>
        </View>
    )
}

export default Reminder