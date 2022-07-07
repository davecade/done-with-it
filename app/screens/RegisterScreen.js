import { StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().email().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name={"account"}
                    placeholder="Name"
                    //textContentType="text" //Only works on IOS
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress" //Only works on IOS
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name={"password"}
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password" //Only works on IOS
                />
                <SubmitButton title="REGISTER" />
            </AppForm>
        </Screen>
    );
};

export default RegisterScreen;

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
