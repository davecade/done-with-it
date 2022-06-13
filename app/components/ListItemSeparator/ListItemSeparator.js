import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../config/colors";

const ListItemSeparator = ({ height = 1 }) => {
    return <View style={[styles.separator, { height: height }]}></View>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        backgroundColor: colors.light,
    },
});
