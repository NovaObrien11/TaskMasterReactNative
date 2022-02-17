import React from 'react';
import {View, TextInput, StyleSheet, Platform} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/Colors";
import DefaultStyles from "../config/DefaultStyles";

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={20} color={colors.dark} style={styles.icon}/>
            <TextInput style={DefaultStyles.text} {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        marginVertical: 50,
        padding: 15,
        width: "100%",
    },
    icon: {
        marginRight: 10
    },
})

export default AppTextInput;