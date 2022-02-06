import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Platform,
    StatusBar,
} from "react-native";

export default function App() {

    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <View
                style={{
                    backgroundColor: "green",
                    flex: 1,
                }}
            >
                <View style={{
                    backgroundColor: "dodgerblue",
                    flex: 2
                }} />
                <View style={{
                    backgroundColor: "gold",
                    flex: 1
                }} />
                <View style={{
                    backgroundColor: "tomato",
                    flex: 1
                }} />
            </View>
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
