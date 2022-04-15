import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function App() {
    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <WelcomeScreen />
            {/* <ViewImageScreen /> */}
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
});
