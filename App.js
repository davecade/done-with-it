import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="click me"
                color="orange"
                onPress={() =>
                    Alert.prompt("My Tite", "My message", text => console.log(text))
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "pink",
        fontWeight: "bold",
    },
});
