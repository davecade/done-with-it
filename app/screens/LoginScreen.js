import { StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen/Screen";
import Button from "../components/Button/Button";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import colors from "../config/colors";
import { Formik } from "formik";

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType=""
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress" //Only works on IOS
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password" //Only works on IOS
                        />
                        <Button
                            text="login"
                            onPress={handleSubmit}
                            color={colors.primary}
                        />
                    </>
                )}
            </Formik>
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
