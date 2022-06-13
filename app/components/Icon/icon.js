import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText/AppText";
import colors from "../../config/colors";

const icon = ({ title, iconType, backgroundColor }) => {
    return (
        <View style={styles.container}>
            <View
                style={[
                    { backgroundColor: backgroundColor },
                    styles.iconContainer,
                ]}
            >
                <MaterialCommunityIcons
                    name={iconType}
                    size={15}
                    color={colors.white}
                ></MaterialCommunityIcons>
            </View>
            <AppText>{title}</AppText>
        </View>
    );
};

export default icon;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        flexDirection: "row",
        backgroundColor: colors.white,
    },
    iconContainer: {
        borderRadius: 50,
        marginRight: 10,
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
