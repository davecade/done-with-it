import React from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

const WelcomeScreen = () => {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            resizeMode="cover"
            style={styles.image}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    top: 50,
                }}
            >
                <Image
                    source={require("../assets/logo-red.png")}
                    style={{
                        height: 70,
                        width: 70,
                    }}
                ></Image>
                <Text style={styles.text}>Sell what you dont need</Text>
            </View>
            <View
                style={{
                    backgroundColor: "#fc5c65",
                    flexDirection: "row",
                    height: 50,
                }}
            ></View>
            <View
                style={{
                    backgroundColor: "#4ECDC4",
                    flexDirection: "row",
                    height: 50,
                }}
            ></View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontWeight: "bold",
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
    },
});

export default WelcomeScreen;
