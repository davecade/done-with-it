import React from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Button from "../components/Button/Button";
import colors from "../config/colors";

const WelcomeScreen = () => {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            resizeMode="cover"
            style={styles.image}
            blurRadius={5}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={{
                        height: 70,
                        width: 70,
                    }}
                ></Image>
                <Text style={styles.text}>Sell what you dont need</Text>
            </View>
            <Button color={colors.primary} text={"LOGIN"} />
            <Button color={colors.secondary} text={"REGISTER"} />
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
        padding: 10,
    },
    logoContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        top: 50,
    },
});

export default WelcomeScreen;
