import React from "react";
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    SafeAreaView,
    Image,
    View,
} from "react-native";

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
            <Image
                source={{
                    uri: "https://picsum.photos/200/300",
                    width: 200,
                    height: 300,
                }}
                fadeDuration={1000}
            />
            <TouchableNativeFeedback
                onPress={() => console.log("image tapped")}
            >
                <View
                    style={{
                        width: 200,
                        height: 70,
                        backgroundColor: "dodgerblue",
                    }}
                ></View>
            </TouchableNativeFeedback>
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
