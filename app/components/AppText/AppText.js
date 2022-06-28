import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const AppText = ({ children, color, style }) => {
    return (
        <Text
            style={{
                ...styles.text,
                color: color,
                ...style,
            }}
        >
            {children}
        </Text>
    );
};

export default AppText;
