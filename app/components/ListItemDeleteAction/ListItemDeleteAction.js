import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color={colors.white}
            />
        </View>
    );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
