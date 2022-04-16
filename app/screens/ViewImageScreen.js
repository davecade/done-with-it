import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                source={require("../assets/chair.jpg")}
                resizeMode="contain"
                style={styles.image}
            ></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.black,
    },
    image: {
        height: "90%",
        width: "100%",
    },
    closeIcon: {
        position: "absolute",
        height: 30,
        width: 30,
        backgroundColor: colors.primary,
        top: 20,
        left: 20,
    },
    deleteIcon: {
        position: "absolute",
        height: 30,
        width: 30,
        backgroundColor: colors.secondary,
        top: 20,
        right: 20,
    },
});

export default ViewImageScreen;
