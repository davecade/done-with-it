import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="close"
                size={30}
                style={styles.closeIcon}
            ></MaterialCommunityIcons>
            <MaterialCommunityIcons
                name="trash-can-outline"
                size={30}
                style={styles.deleteIcon}
            ></MaterialCommunityIcons>
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
        //backgroundColor: colors.primary,
        color: "#fff",
        top: 10,
        left: 20,
    },
    deleteIcon: {
        position: "absolute",
        height: 30,
        width: 30,
        color: "#fff",
        //backgroundColor: colors.secondary,
        top: 10,
        right: 20,
    },
});

export default ViewImageScreen;
