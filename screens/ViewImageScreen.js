import React from "react";
import { StyleSheet, View, Image } from "react-native";

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                source={require("../assets/chair.jpg")}
                resizeMode="cover"
                style={styles.image}
            ></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: "black",
    },
    image: {
        height: "80%",
        width: "100%",
    },
    closeIcon: {
        position: "absolute",
        height: 30,
        width: 30,
        backgroundColor: "#fc5c65",
        top: 20,
        left: 20,
    },
    deleteIcon: {
        position: "absolute",
        height: 30,
        width: 30,
        backgroundColor: "#4ECDC4",
        top: 20,
        right: 20,
    },
});

export default ViewImageScreen;
