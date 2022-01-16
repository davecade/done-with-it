import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Alert,
    Platform,
    StatusBar,
} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <Button
                title="click me"
                color="orange"
                onPress={() =>
                    Alert.prompt("My Tite", "My message", (text) =>
                        console.log(text)
                    )
                }
            />
        </SafeAreaView>
    );
}

const containerStyle = { backgroundColor: "white" };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    text: {
        color: "pink",
        fontWeight: "bold",
    },
});
