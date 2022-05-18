import { TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Button.styles";
import AppText from "../AppText/AppText";

const Button = ({ color, text, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: color
            }}
            onPress={onPress}
        >
            <AppText color={"white"}>{text}</AppText>
        </TouchableOpacity>
    );
};

export default Button;
