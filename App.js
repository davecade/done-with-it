import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="click me"
                color="orange"
                onPress={() => console.log("Button was tapped")}
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
