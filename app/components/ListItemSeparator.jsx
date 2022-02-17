import {View} from "react-native";
import React from "react";
import colors from "../config/Colors";

export function ListItemSeparator() {
    return <View
        style={{
            height: 1,
            backgroundColor: colors.dark,
        }}
    />;
}