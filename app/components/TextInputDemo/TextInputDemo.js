import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Screen from "../Screen/Screen";

const TextInputDemo = () => {
    const [firstName, setFirstName] = useState("");

    return (
        <Screen>
            <Text>{firstName}</Text>
            <TextInput
                secureTextEntry
                maxLength={500}
                keyboardType={"numeric"}
                clearButtonMode="always"
                onChangeText={(text) => setFirstName(text)}
                onChange={(val) => {
                    console.log("firstName", val);
                }}
                placeholder="First Name"
                style={styles.textInput}
            />
        </Screen>
    );
};

export default TextInputDemo;

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
});
