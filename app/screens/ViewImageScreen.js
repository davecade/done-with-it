import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <MaterialCommunityIcons
                    name="close"
                    size={35}
                    style={styles.closeIcon}
                ></MaterialCommunityIcons>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={35}
                    style={styles.deleteIcon}
                ></MaterialCommunityIcons>
            </View>
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: colors.black,
    },
    iconsContainer: {
        marginBottom: 30
    },
    image: {
        height: "100%",
        width: "100%",
    },
    closeIcon: {
        position: "absolute",
        height: 30,
        width: 30,
        //backgroundColor: colors.primary,
        color: colors.white,
        top: 10,
        left: 20,
    },
    deleteIcon: {
        position: "absolute",
        height: 30,
        width: 30,
        color: colors.white,
        //backgroundColor: colors.secondary,
        top: 10,
        right: 20,
    },
});

export default ViewImageScreen;
