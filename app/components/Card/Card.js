import { View, Image } from "react-native";
import React from "react";
import styles from "./Card.styles";
import AppText from "../AppText/AppText";

const Card = ({ title, subtitle, image }) => {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 15,
                }}
            ></Image>
            <View style={styles.textContainer}>
                <AppText
                    color="black"
                    otherStyles={{
                        marginBottom: 10,
                    }}
                >
                    {title}
                </AppText>
                <AppText
                    color="green"
                    otherStyles={{
                        marginBottom: 10,
                    }}
                >
                    {subtitle}
                </AppText>
            </View>
        </View>
    );
};

export default Card;
