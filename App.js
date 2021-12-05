import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text 
                style={styles.text}
                numberOfLines={1}
                onPress={() => console.log("text clicked")}
            >
                BLACKPINK IN YA AREA
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        marginTop: 25,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        color: "pink",
        fontWeight: "bold",
    },
});
