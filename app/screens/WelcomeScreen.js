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
            <View style={styles.buttonsContainer}>
                <Button
                    color={colors.primary}
                    text={"LOGIN"}
                    onPress={() => console.log("LOGIN Pressed")}
                />
                <Button
                    color={colors.secondary}
                    text={"REGISTER"}
                    onPress={() => console.log("REGISTER Pressed")}
                />
            </View>
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
    logoContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        top: 50,
    },
    buttonsContainer: {
        paddingLeft: 10,
        paddingRight: 10,
    }
});

export default WelcomeScreen;
