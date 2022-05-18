import { View, ImageBackground } from "react-native";
import React from "react";
import styles from "./Card.styles";
import AppText from "../AppText/AppText";

const Card = ({ title, subtitle, image }) => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}>
                <ImageBackground
                    source={image}
                    resizeMode="contain"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                ></ImageBackground>
            </View>
            <View style={styles.textContainer}>
                <AppText color="black">{title}</AppText>
                <AppText color="green">{subtitle}</AppText>
            </View>
        </View>
    );
};

export default Card;
