import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const AppText = ({ children, color, otherStyles }) => {
    return (
        <Text
            style={[{
                ...styles.text,
                color: color,
            }, otherStyles]}
        >
            {children}
        </Text>
    );
};

export default AppText;
