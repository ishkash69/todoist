
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import colorsPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/resposnsiveSize";
import actions from "../../redux/actions";



const ItemDetails = ({ navigation, route }) => {

    const [data, setData] = useState({})
    let itemData = route?.params
    let id = itemData.id

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            let res = await actions.productDetails(id)
            let itemData = res
            setData(itemData)
            console.log(itemData, "itemdata======>>>>>:LPPKO")
        } catch (error) {
            console.log("error raised", error)
        }
    }



    return (
        <View style={styles.container}>
            <HeaderComp text={"DETAILS"} />
            <View style={styles.ItemDetails}>
                <Image style={{ height: "60%", width: "100%" }} source={{ uri: data?.thumbnail }} />
                <View style={{ marginTop: moderateScaleVertical(16), }}>
                    <Text style={styles.titleStyle}>
                        {data.title}
                    </Text>
                    <Text style={styles.descStyle}>
                        {data.description}
                    </Text>
                </View>
                <View style={{ marginTop: moderateScaleVertical(16), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={{ fontSize: 25, color: "green" }}>Price: ${data.price}</Text>
                        <Text style={{ fontSize: 14, color: colorsPath.black }}>({data.discountPercentage}%off)</Text>
                    </View>
                    <Text style={{ fontSize: 25, color: colorsPath.purple }}>Rating: {data.rating}</Text>
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 10 }}>
                    <ButtonComp title={"Buy Now"} />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(10)
    },
    ItemDetails: {
        flex: 1,
        marginTop: moderateScale(16)
    },
    titleStyle: {
        color: colorsPath.black,
        fontWeight: "bold",
        fontSize: textScale(18)
    },
    descStyle: {
        color: colorsPath.black,
        marginTop: moderateScaleVertical(10),
        fontSize: textScale(14)
    }
})
export default ItemDetails

