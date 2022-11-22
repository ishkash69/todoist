import React from "react";
import { TouchableOpacity, View } from "react-native";


export const Demo =({
    text,
})=>{
    return(
        <View>
            <TouchableOpacity>
                <Text>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )

}