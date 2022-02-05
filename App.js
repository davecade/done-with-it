import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Platform,
    StatusBar,
} from "react-native";
import {
    useDimensions,
    useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
    console.log("USE DIMENSIONS: ", useDimensions());

    const { landscape } = useDeviceOrientation();
    console.log("is Landscape?", landscape);

    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    width: "100%",
                    height: landscape ? "100%" : "30%",
                }}
            ></View>
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
