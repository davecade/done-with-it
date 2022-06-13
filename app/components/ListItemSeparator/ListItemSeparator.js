import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../config/colors";

const ListItemSeparator = ({ height }) => {
    return <View style={[styles.separator, { height: height }]}></View>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
    },
});
