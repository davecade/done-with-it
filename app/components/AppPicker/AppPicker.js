import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import AppText from "../AppText/AppText";

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={colors.medium}
                    style={styles.icon}
                />
            )}
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons
                name={"chevron-down"}
                size={20}
                color={colors.medium}
            />
        </View>
    );
};

export default AppPicker;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    textInput: defaultStyles.text,
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
});
