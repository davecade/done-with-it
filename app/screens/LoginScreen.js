import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen/Screen";
import Button from "../components/Button/Button";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import colors from "../config/colors";

const LoginScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType=""
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress" //Only works on IOS
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="password" //Only works on IOS
            />
            <Button
                text="login"
                onPress={() => console.log(email, password)}
                color={colors.primary}
            />
        </Screen>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    container: {
        padding: 10,
    },
});
