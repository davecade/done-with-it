import { View } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Button.styles";
import AppText from "../AppText/AppText";

const Button = ({ color, text }) => {
    return (
        <View
            style={{
                ...styles.button,
                backgroundColor: color
            }}
        >
            <AppText color={"white"}>{text}</AppText>
        </View>
    );
};

export default Button;
