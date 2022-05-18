import { View, ImageBackground } from "react-native";
import React from "react";
import styles from "./Card.styles";
import AppText from "../AppText/AppText";

const Card = ({ title, subtitle, image }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="contain"
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 10
                }}
            ></ImageBackground>
            <View style={styles.textContainer}>
                <AppText color="black">{title}</AppText>
                <AppText color="green">{subtitle}</AppText>
            </View>
        </View>
    );
};

export default Card;
