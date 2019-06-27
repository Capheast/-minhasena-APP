import {TouchableOpacity, View} from "react-native";
import React from "react";


export const ButtonIcon = ({
                               icon, onPress = () => {
    }
                           }) => {
    return (
        <TouchableOpacity
            style={{background: '#0000001A'}}
            onPress={onPress}
        >
            <View
                style={{
                    backgroundColor: '#24332B1A',
                    padding: 7,
                    borderRadius: 46,
                    height: 50,
                    width: 50,
                    margin: 16,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                {icon}
            </View>
        </TouchableOpacity>)
}