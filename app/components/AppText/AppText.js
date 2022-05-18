import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const AppText = ({ children, color }) => {
    return <Text style={{
        ...styles.text,
        color: color
    }}>{children}</Text>;
};

export default AppText;
