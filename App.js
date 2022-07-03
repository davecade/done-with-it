import React, { useState } from "react";
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
import ListingsScreen from "./app/screens/ListingsScreen";
import TextInputDemo from "./app/components/TextInputDemo/TextInputDemo";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";
import AppPicker from "./app/components/AppPicker/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
    { label: "Funiture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Mobile Phones", value: 3 },
];

export default function App() {
    const [category, setCategory] = useState(categories[0]);

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
            {/* <MyAccount /> */}
            {/* <ListingsScreen /> */}
            {/* <TextInputDemo /> */}
            {/* <AppTextInput placeholder={"hello"} icon={"email"} /> */}
            {/* <AppPicker
                selectedItem={category}
                onSelectedItem={(item) => setCategory(item)}
                icon={"apps"}
                placeholder={"Category"}
                items={categories}
            /> */}
            {/* <AppTextInput icon={"email"} placeholder={"Email"} /> */}
            <LoginScreen />
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
