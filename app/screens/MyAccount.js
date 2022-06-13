import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen/Screen";
import ListItem from "../components/ListItem/ListItem";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import Icon from "../components/Icon/icon";
import colors from "../config/colors";

const MyAccount = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem
                    title={"Mosh Hamedani"}
                    subtitle={"programmingwithmosh@gmail.com"}
                    image={require("../assets/mosh.jpg")}
                    onPress={() => {}}
                />
                <ListItemSeparator height={50} />
                <Icon
                    title={"My Listings"}
                    backgroundColor={colors.primary}
                    iconType={"format-list-bulleted"}
                />
                <ListItemSeparator height={5} />
                <Icon
                    title={"My Messages"}
                    backgroundColor={colors.secondary}
                    iconType={"email"}
                />
                <ListItemSeparator height={20} />
                <Icon
                    title={"My Messages"}
                    backgroundColor={colors.yellow}
                    iconType={"email"}
                />
            </View>
        </Screen>
    );
};

export default MyAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },
});
