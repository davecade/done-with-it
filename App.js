import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
} from "react-native";
import AppText from "./app/components/AppText/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccount from "./app/screens/MyAccount";

export default function App() {
    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            {/* <WelcomeScreen /> */}
            {/* <ViewImageScreen /> */}
            {/* <View style={{ backgroundColor: "#f8f4f4", height: "100%", padding: 20 }}>
                <Card
                    title={"Red Jacket for sale!"}
                    subtitle={"$100"}
                    image={require("./app/assets/jacket.jpg")}
                />
            </View> */}
            {/* <ListingDetailsScreen /> */}
            {/* <MessagesScreen /> */}
            <MyAccount />
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
