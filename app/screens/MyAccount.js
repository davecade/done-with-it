import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen/Screen";
import ListItem from "../components/ListItem/ListItem";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import Icon from "../components/Icon/icon";
import colors from "../config/colors";

let data = [
    {
        id: 1,
        title: "My Listings",
        backgroundColor: colors.primary,
        iconType: "format-list-bulleted",
    },
    {
        id: 2,
        title: "My Messages",
        backgroundColor: colors.secondary,
        iconType: "email",
    },
];

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
                <View>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <Icon
                                    key={index}
                                    title={item.title}
                                    backgroundColor={item.backgroundColor}
                                    iconType={item.iconType}
                                />
                            );
                        }}
                        ItemSeparatorComponent={ListItemSeparator}
                    />
                </View>
                <ListItemSeparator height={20} />
                <Icon
                    title={"Log Out"}
                    backgroundColor={colors.yellow}
                    iconType={"logout"}
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
