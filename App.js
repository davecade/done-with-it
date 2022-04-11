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
                    flexDirection: "row",
                    justifyContent: "center", //main
                    alignItems: "center", //secondary
                    alignContent: "center",
                    flexWrap: "wrap",
                }}
            >
                <View
                    style={{
                        backgroundColor: "dodgerblue",
                        height: 100,
                        width: 100,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "gold",
                        height: 100,
                        width: 100,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "tomato",
                        height: 100,
                        width: 100,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "greenyellow",
                        height: 100,
                        width: 100,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "purple",
                        height: 100,
                        width: 100,
                    }}
                />
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
