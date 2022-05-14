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

// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";

// export default function App() {
//     return (
//         <SafeAreaView style={[styles.container, containerStyle]}>
//             {/* <WelcomeScreen /> */}
//             <ViewImageScreen />
//         </SafeAreaView>
//     );
// }

// const containerStyle = { backgroundColor: "white" };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "black",
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     },
// });
//-----------------------------------------

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <AppText>Hello I love React Native</AppText>
            <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
        </View>
    );
}
