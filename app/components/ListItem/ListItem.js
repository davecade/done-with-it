import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "../AppText/AppText";
import colors from "../../config/colors";
import { TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ title, subtitle, image, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.listItemContainer}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <AppText otherStyles={styles.title}>{title}</AppText>
                        <AppText otherStyles={styles.subtitle}>
                            {subtitle}
                        </AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "500",
    },
    subtitle: {
        color: colors.medium,
    },
});
